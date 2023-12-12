import Link from 'next/link';
import { Year } from '../../../interfaces';

type Props = {
  data: Year;
};

const ListItem = ({ data }: Props) => (
  <Link href={`/years/${data.id}`}>{data.name}</Link>
);

export default ListItem;
