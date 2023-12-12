import Link from 'next/link';
import List from '../../components/Year/List';
import { yearData } from '../../utils/mocking/yearData';

const Years = () => {
  return (
    <>
      <List items={yearData} />
      <p>
        <Link href='/'></Link>
      </p>
    </>
  );
};

export default Years;
