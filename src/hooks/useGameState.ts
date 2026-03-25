import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { chapter1 } from '../data/chapters/chapter1';
import { ChoiceEngine } from '../utils/gameLogic';

export const useGameState = () => {
  const gameState = useSelector((state: RootState) => state.game);

  // 获取当前场景的数据
  const getCurrentScene = () => {
    const chapters = [chapter1]; // 未来添加更多章节
    const chapter = chapters.find(c => c.id === gameState.currentChapter);
    const scene = chapter?.scenes.find(s => s.id === gameState.currentScene);
    return scene;
  };

  // 获取当前场景可用的选择
  const getAvailableChoices = () => {
    const currentScene = getCurrentScene();
    if (!currentScene) return [];
    
    return ChoiceEngine.evaluateChoices(currentScene.choices, gameState);
  };

  // 检查是否达到结局条件
  const checkForEnding = () => {
    return ChoiceEngine.checkEndingConditions(gameState);
  };

  return {
    gameState,
    getCurrentScene,
    getAvailableChoices,
    checkForEnding
  };
};