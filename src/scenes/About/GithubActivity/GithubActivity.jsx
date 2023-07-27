import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#f9004d',
    level3: '#f9004d',
    level2: '#f9004d',
    level1: '#f9004d',
    level0: '#fccfe0',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="diditeq"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
