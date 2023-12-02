// src/app/users/page.tsx
import Link from 'next/link';
// import Layout from '../../app/layout';
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
