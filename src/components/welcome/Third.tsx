import s from './welcome.module.scss';
import welcome3 from '../../assets/icons/welcome3.svg'

export const Third = () => {
    return (
        <div class={s.card}>
        <svg>
        <use xlinkHref='#welcome3'></use>
      </svg>
        <h2>统计图表<br />收支清晰可见</h2>
      </div>
    )
  }

Third.displayName = 'Third'