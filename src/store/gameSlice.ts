import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, ChoiceOption, initialGameState } from '../types/game';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    applyChoice: (state, action: PayloadAction<ChoiceOption>) => {
      const choice = action.payload;
      
      // 应用属性变化
      if (choice.effects.stats) {
        Object.entries(choice.effects.stats).forEach(([key, value]) => {
          if (value !== undefined) {
            state.playerStats[key as keyof typeof state.playerStats] += value;
            // 限制在 0-100 范围内
            state.playerStats[key as keyof typeof state.playerStats] = Math.max(0, Math.min(100, 
              state.playerStats[key as keyof typeof state.playerStats]
            ));
          }
        });
      }
      
      // 应用关系变化
      if (choice.effects.relationships) {
        Object.entries(choice.effects.relationships).forEach(([key, value]) => {
          if (value !== undefined) {
            state.relationships[key as keyof typeof state.relationships] += value;
            // 限制在 0-100 范围内
            state.relationships[key as keyof typeof state.relationships] = Math.max(0, Math.min(100, 
              state.relationships[key as keyof typeof state.relationships]
            ));
          }
        });
      }
      
      // 记录选择历史
      state.choiceHistory.push(choice.id);
      
      // 更新场景
      if (choice.effects.nextScene) {
        state.currentScene = choice.effects.nextScene;
      }
      
      // 解锁内容
      if (choice.effects.unlock) {
        state.unlockedEndings.push(...choice.effects.unlock);
      }
      
      // 增加游戏时间
      state.playTime += 1;
    },
    
    changeScene: (state, action: PayloadAction<string>) => {
      state.currentScene = action.payload;
    },
    
    changeChapter: (state, action: PayloadAction<number>) => {
      state.currentChapter = action.payload;
      state.currentScene = `${action.payload}-1`;
    },
    
    resetGame: () => {
      return initialGameState;
    },
    
    loadGame: (_, action: PayloadAction<GameState>) => {
      return action.payload;
    }
  },
});

export const { applyChoice, changeScene, changeChapter, resetGame, loadGame } = gameSlice.actions;
export default gameSlice.reducer;