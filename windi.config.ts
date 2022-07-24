import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
  //  safelist: ['prose', 'prose-sm', 'm-auto', 'prose-red'],
  darkMode: 'class',
  shortcuts: {
    btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'icon-btn':
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
  },
  theme: {
    extend: {
      colors: {
        pri: '#73fac8',
        sec: '#00bee1',
        tet: '#224248',
        blk: {
          1: '#1c1f21',
          2: '#282d2d',
        },
        zinc: colors.zinc,
      },
    },
  },
});
