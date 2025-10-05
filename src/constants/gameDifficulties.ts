export enum DifficultyEnum {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const difficulties: Record<DifficultyEnum, number> = {
  [DifficultyEnum.Easy]: 1,
  [DifficultyEnum.Medium]: 6,
  [DifficultyEnum.Hard]: 8,
};
