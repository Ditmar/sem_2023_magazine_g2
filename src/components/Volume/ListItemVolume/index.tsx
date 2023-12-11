import Link from 'next/link';
import { Volume } from '../../../interfaces';
type Props = {
  data: Volume;
};

const ListItemVolume = ({ data }: Props) => (

  <Link href={`/volumes/${data.id}`}>{data.name}</Link>
);

export default ListItemVolume;
