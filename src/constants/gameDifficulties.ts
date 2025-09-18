export enum DifficultyEnum {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const difficulties: Record<DifficultyEnum, number> = {
  [DifficultyEnum.Easy]: 8,
  [DifficultyEnum.Medium]: 12,
  [DifficultyEnum.Hard]: 16,
};
