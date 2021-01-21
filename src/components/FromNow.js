import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const FromNow = (props) => {
    const { date } = props;

    return dayjs(date).fromNow();
};

export default FromNow;
