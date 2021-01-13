import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const FromNow = (props) => {
    const { data } = props;

    return dayjs(data).fromNow();
};

export default FromNow;
