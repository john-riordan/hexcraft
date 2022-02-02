import { memo } from 'react';

const Icon = ({ icon, ...rest }) => {
  const props = {
    viewBox: '0 0 28 28',
    fill: 'none',
    ...rest,
  };

  switch (icon) {
    case 'mask':
    case 'yordle':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M34.8739 9.76433L46 7.25L42.4396 16.501L46 25.3561C46 25.3561 38.2488 41 24 41C9.75118 41 2.02967 25.3561 2.02967 25.3561L5.56035 16.501L2 7.25L13.1261 9.76433C17.5024 7.25 24 7 24 7C24 7 30.5273 7.25 34.8739 9.76433ZM14.4119 16.25C10.8723 16.25 9.25 23 9.25 23C9.25 23 12.7453 21.0177 14.3381 21.0177C15.9309 21.0177 19.5 23 19.5 23C19.5 23 17.9514 16.25 14.4119 16.25ZM16.75 26.75C16.75 26.75 23.9008 31.9753 31 26.75C31 26.75 25.2337 42.5 16.75 26.75ZM28.5 23C28.5 23 32.0794 21.0177 33.6768 21.0177C35.2298 21.0177 38.75 23 38.75 23C38.75 23 37.2339 16.25 33.6768 16.25C30.1196 16.25 28.5 23 28.5 23Z'
          />
        </svg>
      );
    case 'gold':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.9884 4.70656C21.0804 4.31913 25.4166 6.80401 25.6553 10.2107C25.8409 12.7089 23.7457 15.0335 20.603 16.2358C20.7091 16.5431 20.7621 16.8504 20.7887 17.171C21.0406 20.5777 17.1288 23.5034 12.0102 23.8775C6.89165 24.2516 2.59525 21.9136 2.3433 18.507C2.17091 16.0087 4.25281 13.6842 7.39555 12.4818C7.28946 12.1745 7.23642 11.8673 7.2099 11.5466C6.95795 8.13996 10.8963 5.09399 15.9884 4.70656ZM4.84954 18.026C4.62412 19.6292 7.20991 21.8869 11.8776 21.4995C16.5453 21.1121 17.9642 19.1749 17.2614 16.9973C17.219 17.0016 17.1767 17.0072 17.1339 17.0129C17.0427 17.025 16.9496 17.0374 16.8503 17.0374C13.5219 17.2779 10.5118 16.2893 8.76139 14.6193C6.82536 15.0201 5.08823 16.3694 4.84954 18.026Z'
          />
        </svg>
      );
    case 'support':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.6516 4.08337H11.3485L10.4205 5.32296L14 9.73037L17.5796 5.32296L16.6516 4.08337ZM9.75756 8.35302H2.33331C3.35472 9.35415 4.53327 10.2964 5.78028 10.9699C6.28041 11.1316 6.71467 11.2438 7.23862 11.2454H9.22725L7.10604 13.8623L10.553 15.5151L11.8788 10.5567L9.75756 8.35302ZM18.2423 8.35302H25.6666C24.6449 9.35281 23.4664 10.2975 22.2196 10.9699C21.7195 11.1316 21.2852 11.2438 20.7613 11.2454H18.7726L20.8938 13.8623L17.4469 15.5151L16.1211 10.5567L18.2423 8.35302ZM16.7839 21.713L14.6627 10.6945C14.5722 11.0076 14.3139 11.2147 13.9999 11.2454C13.6872 11.2132 13.4269 11.0064 13.337 10.6945L11.2158 21.713L13.9999 23.9167L16.7839 21.713Z'
          />
        </svg>
      );
    case 'star':
      return (
        <svg {...props}>
          <path d='M14 4L17.2458 10.5326L24.4616 11.6008L19.2517 16.7064L20.4656 23.8992L14 20.522L7.53436 23.8992L8.74827 16.7064L3.53838 11.6008L10.7543 10.5326L14 4Z' />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d='M14.5 23C9.7 19 7.5 10.6667 7 7C10.2 6.2 13 4 14 3L14.5 16L15.5 4C16.7 5.6 20 6.66667 21.5 7C22.3 12.6 17.1667 20 14.5 23Z' />
        </svg>
      );
    case 'knife':
      return (
        <svg {...props}>
          <path d='M8.5 17.5C10.5 12.5 13.3333 11 14.5 9.5L17.5 12.5L13.5 15.5C14.5 16.5 16.8841 16.3333 18 16C11.6 24 4.83333 23.1667 2.5 21.5C4 21.1667 7.42875 20.1781 8.5 17.5Z' />
          <path d='M24.5 5L21.5 2L17.5 6.5L14.5 5L13 6L21.5 11.5L22.5 10.5L19 7.5L24.5 5Z' />
        </svg>
      );
    case 'grid':
      return (
        <svg {...props}>
          <rect x='4.5' y='4.5' width='5' height='5' />
          <rect x='4.5' y='11.5' width='5' height='5' />
          <rect x='4.5' y='18.5' width='5' height='5' />
          <rect x='11.5' y='4.5' width='5' height='5' />
          <rect x='11.5' y='11.5' width='5' height='5' />
          <rect x='11.5' y='18.5' width='5' height='5' />
          <rect x='18.5' y='4.5' width='5' height='5' />
          <rect x='18.5' y='11.5' width='5' height='5' />
          <rect x='18.5' y='18.5' width='5' height='5' />
        </svg>
      );
    case 'bow':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15 20.1826L2.5 16.6827L11.5 7.18266C10.7 5.98266 8.16667 5.34929 7 5.1826C13.5 4.18262 16.8333 7.51594 18.5 9.6826H19.5V8.1826L26 9.1826L21 13.6826L20.5 12.1826L19 13.1826C20.2 19.5826 15.8333 22.8493 13.5 23.6826L15 20.1826ZM16 11.1826C15.6 9.18262 13.5 8.01595 12.5 7.68262L6 14.6826L16 11.1826ZM7 16.1826L17 13.6826C17.1667 15.016 17.2 17.9826 16 19.1826L7 16.1826Z'
          />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M20.875 4.83337L14.4584 8.15629V19.3855L20.875 16.6355V9.98962L22.4906 9.18754V18.1136L14 21.5625L5.75002 18.1136V9.18754L7.12502 9.98962V16.6355L13.5417 19.3855V8.15629L7.12502 4.83337V7.69796L3.91669 5.86462V19.6146L14 23.625L24.0834 19.6146V5.86462L20.875 7.69796V4.83337Z'
          />
        </svg>
      );
    case 'search':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.8362 17.7149C20.8839 16.2437 21.5001 14.4438 21.5001 12.5C21.5001 7.52946 17.4706 3.5 12.5 3.5C7.52946 3.5 3.5 7.52946 3.5 12.5C3.5 17.4706 7.52946 21.5001 12.5 21.5001C14.4438 21.5001 16.2436 20.8839 17.7148 19.8362L21.9392 24.0607C22.525 24.6464 23.4748 24.6464 24.0605 24.0607C24.6463 23.4749 24.6463 22.5251 24.0605 21.9393L19.8362 17.7149ZM18.7309 12.5C18.7309 15.9412 15.9412 18.7309 12.5 18.7309C9.05887 18.7309 6.26925 15.9412 6.26925 12.5C6.26925 9.05887 9.05887 6.26925 12.5 6.26925C15.9412 6.26925 18.7309 9.05887 18.7309 12.5Z'
          />
        </svg>
      );
    case 'close':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22.1666 7.48409L20.5158 5.83325L13.9999 12.3491L7.48409 5.83325L5.83325 7.48409L12.3491 13.9999L5.83325 20.5158L7.48409 22.1666L13.9999 15.6508L20.5158 22.1666L22.1666 20.5158L15.6508 13.9999L22.1666 7.48409Z'
          />
        </svg>
      );
    case 'ad':
      return (
        <svg {...props}>
          <path d='M25.2112 7.22632H29.1868V11.2721L7.22626 33.6204V25.5288L25.2112 7.22632ZM18.7978 25.6169L28.1689 16.1189C28.1689 16.1189 36.9297 16.1271 39.618 9.53821C43.4054 24.3803 38.6336 41.5194 14.0416 40.7488C17.1653 37.358 19.3657 30.26 18.7978 25.6169Z' />
        </svg>
      );
    case 'ap':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M37.2954 23.4266C40.5875 20.1342 40.4274 14.617 36.8861 11.111C33.3448 7.60491 27.846 7.39134 24.5361 10.6838L10.4243 24.8148L17.7738 24.6369L8.34229 39.6577L23.3616 30.2252L23.2014 37.5576L37.2954 23.4266Z'
          />
        </svg>
      );
    case 'apen':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.3371 4.93481H31.1059V9.4325H9.83478V26.8856H5.3371V4.93481ZM37.3333 26.2606V11.5365H41.831V27.4919L41.5262 28.0161C40.0471 30.5594 37.185 34.2465 34.0777 37.3076C32.5181 38.8439 30.8357 40.2836 29.174 41.3544C27.5737 42.3856 25.7098 43.2616 23.8513 43.2616C18.4901 43.2616 14.7314 39.746 12.231 37.4073C11.9944 37.1859 11.769 36.9751 11.5546 36.7788L14.5916 33.4614C14.7873 33.6405 14.9813 33.8193 15.1741 33.9969C17.8801 36.4904 20.3474 38.7639 23.8513 38.7639C24.3982 38.7639 25.3631 38.4594 26.7378 37.5736C28.0511 36.7273 29.49 35.5134 30.9213 34.1034C33.5785 31.4858 35.9994 28.4024 37.3333 26.2606ZM24.2332 17.2215H16.1387V12.7238H24.2332V17.2215ZM32.8079 24.4607L24.2832 34.3313L17.604 30.0808L20.0188 26.2863L23.4194 28.4504L29.404 21.5209L32.8079 24.4607Z'
          />
        </svg>
      );
    case 'armor':
      return (
        <svg {...props}>
          <path d='M8.76941 10.7693H39.2306V28.6877C36.4102 34.6605 31.3333 38.8414 24 41.2305C16.6668 38.8414 11.5899 34.6605 8.76941 28.6877V10.7693ZM12.3531 14.353V27.8483C14.6413 32.2327 18.4674 35.4128 24 37.4394C29.5326 35.4128 33.3587 32.2327 35.647 27.8483V14.353H12.3531ZM15.9368 17.9366H32.0633V26.8958C30.7601 29.2849 26.6878 32.4614 24 33.6559C21.3123 32.4614 17.2399 29.2849 15.9368 26.8958V17.9366Z' />
        </svg>
      );
    case 'as':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.82131 12.9673V7.8186H28.0484L22.8997 12.9673H7.82131ZM7.82129 19.587V14.4383H21.4286L16.2799 19.587H7.82129ZM7.82129 21.0582V26.207H9.77045L14.8088 21.0582H7.82129ZM31.1744 7.8186H35.036V11.6801L7.82131 38.8948V31.1717L31.1744 7.8186ZM30.7515 18.8884L21.6493 27.9538C22.2009 32.3854 20.8034 36.9457 17.7694 40.182C45.6092 40.3659 39.6698 13.3351 39.6698 13.3351C37.0587 19.6239 30.7515 18.8884 30.7515 18.8884Z'
          />
        </svg>
      );
    case 'cdr':
      return (
        <svg {...props}>
          <path d='M39.6742 9.57254L30.8574 23.9999L39.6742 38.4273H41.6335V41.6334H6.36652V38.4273H8.32579L17.1425 23.9999L8.32579 9.57254H6.36652V6.36646H41.6335V9.57254H39.6742ZM12.3373 38.4273H35.7975L27.1916 24.4024L35.8912 9.72521H12.2443L20.8806 24.4024L12.3373 38.4273ZM24 20.7938C21.6081 20.7938 19.2163 18.0458 16.8245 12.5496H31.1755C28.7837 18.0458 26.3918 20.7938 24 20.7938Z' />
        </svg>
      );
    case 'crit':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M40.1002 40.1003H9.2998L21.9875 34.0627L11.9248 30.0377L21.9875 28.0252L7.89978 7.8999L27.5 21.9001L28.025 11.925L34.0626 21.9876L40.1002 9.29992V40.1003Z'
          />
        </svg>
      );
    case 'health':
      return (
        <svg {...props}>
          <path d='M24 38.6641L9.91956 23.9878C6.70304 20.6351 6.73396 15.333 9.98936 12.0181C13.3572 8.58869 18.8832 8.58869 22.2511 12.0181L24 13.799L25.749 12.0181C29.1169 8.58869 34.6428 8.58869 38.0106 12.0181C41.2661 15.333 41.297 20.6351 38.0805 23.9878L24 38.6641Z' />
        </svg>
      );
    case 'mana':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M23.9967 41.7747C17.9651 41.7747 14.587 38.3255 13.2764 35.1092C10.7385 28.8806 16.8119 19.1343 23.9967 6.2251C31.1897 19.1472 37.2729 28.8847 34.7171 35.1092C33.4012 38.314 30.0167 41.7747 23.9967 41.7747Z'
          />
        </svg>
      );
    case 'mpen':
      return (
        <svg {...props}>
          <path d='M27.0094 14.6471C20.5846 13.0409 16.7476 18.9749 15.6322 22.1426C19.8485 18.8632 21.12 21.2727 24.0647 20.135C26.4205 19.2248 27.0094 16.0972 27.0094 14.6471Z' />
          <path d='M32.4304 23.0801C30.1281 29.1837 23.7524 30.3525 20.8524 30.174C20.8524 31.4456 22.0169 33.9219 26.6748 33.6542C31.3328 33.3865 32.4527 26.4932 32.4304 23.0801Z' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.6468 16.6781C11.2718 20.2556 11.7125 24.9284 12.4171 28.7455L8.54076 29.461C7.75065 25.1801 7.17732 19.2964 10.3628 14.498C11.995 12.0393 15.0475 9.54472 18.4569 8.52565C21.8287 7.51781 26.0329 7.49618 31.2084 8.71315L30.3061 12.5503C25.5768 11.4382 22.1069 11.5488 19.5858 12.3023C17.1022 13.0447 14.7947 14.949 13.6468 16.6781Z'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M36.8841 25.7017C36.9929 22.8494 36.175 20.1095 35.4065 18.5141L38.9577 16.8035C39.9516 18.8667 40.9607 22.2437 40.823 25.852C40.6832 29.5164 39.2431 33.9603 35.4065 36.9164C31.7174 39.7587 27.7933 40.8478 24.1847 40.8582C20.601 40.8685 17.3173 39.386 15.4217 38.5279L17.0473 34.9369C18.4534 35.5734 21.1807 36.925 24.1734 36.9164C27.1414 36.9079 30.1578 35.9843 33.0007 33.794C35.6959 31.7173 36.7774 28.4978 36.8841 25.7017Z'
          />
        </svg>
      );
    case 'mr':
      return (
        <svg {...props}>
          <path d='M24 31.9815C28.408 31.9815 31.9815 28.408 31.9815 24C31.9815 19.5919 28.408 16.0185 24 16.0185C19.5919 16.0185 16.0185 19.5919 16.0185 24C16.0185 28.408 19.5919 31.9815 24 31.9815Z' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M41.5593 24C41.5593 33.6977 33.6977 41.5593 24 41.5593C14.3022 41.5593 6.44067 33.6977 6.44067 24C6.44067 14.3022 14.3022 6.44067 24 6.44067C33.6977 6.44067 41.5593 14.3022 41.5593 24ZM36.7704 24C36.7704 31.0529 31.0529 36.7704 24 36.7704C16.9471 36.7704 11.2296 31.0529 11.2296 24C11.2296 16.9471 16.9471 11.2296 24 11.2296C31.0529 11.2296 36.7704 16.9471 36.7704 24Z'
          />
        </svg>
      );
    case 'ms':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M28.5667 7.25562H7.25571V13.3445H22.4778L28.5667 7.25562ZM21.7167 14.1056H7.25568V20.1945H15.4376L21.7167 14.1056ZM7.25568 27.0444V20.9556H14.8667L8.77789 27.0444H7.25568ZM40.7443 40.7443C40.7443 34.1016 35.5224 33.7041 31.6111 33.7041C29.8678 33.7041 29.2641 32.0166 29.1375 30.4694C29.0329 29.0842 29.667 27.6372 30.6597 26.6639L40.3638 16.9598L30.6597 7.25565L9.53899 28.5666L20.9556 40.7443H40.7443Z'
          />
        </svg>
      );
    case 'onhit':
      return (
        <svg {...props}>
          <path d='M31.2824 7.29419L14.5865 25.6705L9.066 20.6479L5.22331 24.5001L10.9339 29.5504L2.88251 38.5449V42.0561H6.39371L14.5865 33.008L19.6774 37.658L23.8902 34.0413L19.121 29.3119L37.9946 13.9665V6.94409L31.2824 7.29419Z' />
          <path d='M39.7875 33.008L35.4157 25.6705L44.0797 28.1593L39.7875 33.008Z' />
          <path d='M44.2784 22.7543L39.4298 20.4094L45.1925 17.1902L44.2784 22.7543Z' />
        </svg>
      );
    case 'vamp':
      return (
        <svg {...props}>
          <path d='M2.41668 17.3596C2.10603 25.4979 8.65503 35.0912 11.9684 38.8705C10.4411 35.6866 7.85254 27.3152 9.71628 19.3011C12.046 9.28352 2.80498 7.18682 2.41668 17.3596Z' />
          <path d='M12.8225 12.856C12.8225 15.6516 15.204 17.748 16.4723 18.214C15.2391 16.299 15.4462 12.4913 17.4819 12.2344C20.9386 11.798 20.9671 14.5893 20.7434 16.1948C23.306 15.6512 24.238 10.5255 20.7434 10.2154C15.0146 9.7071 12.8225 9.3615 12.8225 12.856Z' />
          <path d='M44.7611 17.3596C45.0718 25.4979 38.5228 35.0912 35.2094 38.8705C36.7367 35.6866 39.3253 27.3152 37.4615 19.3011C35.1318 9.28352 44.3728 7.18682 44.7611 17.3596Z' />
          <path d='M34.3553 12.856C34.3553 15.6516 31.9738 17.748 30.7055 18.214C31.9387 16.299 31.7316 12.4913 29.6959 12.2344C26.2392 11.798 26.2107 14.5893 26.4344 16.1948C23.8718 15.6512 22.9398 10.5255 26.4344 10.2154C32.1632 9.7071 34.3553 9.3615 34.3553 12.856Z' />
        </svg>
      );
    case 'order':
      return (
        <svg {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24.2574 8.99343L18.5182 3.25415L12.7789 8.99343L14.8548 11.0693L16.9307 8.99343V18.5182H20.1056V8.99343L22.0594 11.0693L24.2574 8.99343ZM3.74256 19.0066L9.48184 24.7459L15.2211 19.0066L13.0231 16.9307L11.0693 19.0066V9.48188H7.89438V19.0066L5.81847 16.9307L3.74256 19.0066Z'
          />
        </svg>
      );
    case 'nerf':
      return (
        <svg {...props}>
          <path fillRule='evenodd' clipRule='evenodd' d='M8 13L24 23L40 13V24.75L24 35L8 24.75V13Z' />
        </svg>
      );
    case 'change':
      return (
        <svg {...props}>
          <path d="M37 24C37 31.1797 31.1797 37 24 37C16.8203 37 11 31.1797 11 24C11 16.8203 16.8203 11 24 11C31.1797 11 37 16.8203 37 24Z" />
        </svg>
      );
    case 'buff':
      return (
        <svg {...props}>
          <path fillRule='evenodd' clipRule='evenodd' d='M8 35L24 25L40 35V23.25L24 13L8 23.25V35Z' />
        </svg>
      );
    case 'new':
      return (
        <svg {...props}>
          <path d="M24 4L30.2952 16.3354L43.9722 18.5106L34.1858 28.3096L36.3435 41.9894L24 35.71L11.6565 41.9894L13.8142 28.3096L4.02781 18.5106L17.7048 16.3354L24 4Z" />
        </svg>
      );
    case 'axe':
      return (
        <svg {...props}>
          <path d='M12 22.6713C8.80002 19.0713 11.8333 15.8379 13.5 14.6713L18 24.1713L20.5 23.1713L15.5 13.1713C18.7 11.5713 20.8333 14.8379 21.5 16.6713C22.6667 16.0046 24.7 13.3713 23.5 8.17132C22.3 2.97132 17 2.67132 14.5 3.17132C19.3 6.37132 16.1667 9.17132 14 10.1713L12.5 7.67132L10.5 8.67132L12 11.6713C8.00004 12.4713 6.66667 8.67132 6.49999 6.67132C0.49999 17.0713 7.66668 21.6713 12 22.6713Z' />
        </svg>
      );
    default:
      return null;
  }
};

export default memo(Icon);
