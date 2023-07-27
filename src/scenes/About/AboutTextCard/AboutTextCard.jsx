import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello, I am{' '}
        <span className={s.blue}>Doris Akpan </span>
        based in <span className={s.blue}> Rivers State, Nigeria.</span>
        <br />
        A Mobile App Developer with knowledge in <br />cross-platform development{' '} using React Native.
        <br />
        <br />
        I have a Degree in Accounting
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Researching
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
