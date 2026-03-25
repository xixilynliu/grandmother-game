import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { applyChoice } from '../store/gameSlice';
import ChoiceButton from './ChoiceButton';
import StatsDisplay from './StatsDisplay';

const GameScreen: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  
  const handleChoiceSelect = (choiceId: string) => {
    dispatch(applyChoice({ 
      id: choiceId, 
      text: `选择${choiceId}`,
      effects: { 
        stats: { wisdom: 2 }, 
        nextScene: `${gameState.currentChapter}-${parseInt(gameState.currentScene.split('-')[1]) + 1}` 
      }
    }));
  };

  return (
    <div className="game-container min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            《十八岁太奶奶》互动游戏
          </h1>
          <p className="text-xl text-gray-600">
            重生数学女院士的现代冒险
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                角色信息
              </h2>
              <StatsDisplay stats={gameState.playerStats} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                第一章：重生宴会
              </h2>
              
              <div className="scene-container mb-6">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <p className="text-lg text-gray-700 mb-4">
                    当前场景：{gameState.currentScene}
                  </p>
                  <p className="text-gray-600">
                    请选择你的行动...
                  </p>
                </div>
              </div>

              <div className="choice-buttons grid md:grid-cols-2 gap-4">
                <ChoiceButton 
                  choiceId="c1-1a"
                  text="[忍耐] '没关系，我确实不太懂红酒'"
                  onClick={handleChoiceSelect}
                />
                <ChoiceButton 
                  choiceId="c1-1b" 
                  text="[反击] 反泼回去：'我也手滑'"
                  onClick={handleChoiceSelect}
                />
                <ChoiceButton 
                  choiceId="c1-1c"
                  text="[智慧] 学术点评：'这酒产自法国波尔多...'"
                  onClick={handleChoiceSelect}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                游戏说明
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>🎮 互动叙事游戏</li>
                <li>📚 基于《十八岁太奶奶》剧本</li>
                <li>🎯 您的选择将影响结局</li>
                <li>⏱️ 支持存档/读档功能</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;