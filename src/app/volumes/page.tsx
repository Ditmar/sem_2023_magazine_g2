import Link from 'next/link';
import ListVolume from '../../components/Volume/ListVolume';
import { volumeData } from '../../utils/mocking/volumeData';

const Volumes = () => {
  return (
    <>
      <ListVolume items={volumeData} />
      <p>
        <Link href='/'></Link>
      </p>
    </>
  );
};

export default Volumes;
