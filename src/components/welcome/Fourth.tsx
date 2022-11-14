import s from './welcome.module.scss';
import welcome4 from '../../assets/icons/welcome4.svg'

export const Fourth = () => (
    <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome4'></use>
    </svg>
    <h2>云储存<br />随时随地查看收支</h2>
  </div>
    )
  

Fourth.displayName = 'Fourth'