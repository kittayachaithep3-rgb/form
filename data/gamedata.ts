import { Game } from '../types/game';

export const initialGames: Game[] = [
  { id: '1', title: 'GTA V', platform: 'PC', expectedHours: 100, status: 'เล่นจบแล้ว' },
  { id: '2', title: 'God of War Ragnarok', platform: 'PC', expectedHours: 100, status: 'เล่นจบแล้ว' },
  { id: '3', title: 'GROUNDED', platform: 'PC', expectedHours: 80, status: 'ยังไม่เริ่ม' },
  { id: '4', title: 'V Rising', platform: 'PC', expectedHours: 100, status: 'กำลังเล่น' },
  { id: '5', title: 'Elden Ring', platform: 'PC', expectedHours: 100, status: 'ยังไม่เริ่ม' },
];