import { BsFiletypePdf } from "react-icons/bs";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { SlPaperClip } from "react-icons/sl";
import { Montserrat, Inter } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const ArticleItem = ({ article }: { article: Article }) => {

  return (
      <div className="">
        {article.id % 2 === 0 ? (
          <div className={mont.className}>
            <p className='article-recent'>ARTÍCULOS MÁS RECIENTES</p>
          </div>
        ) : (
          <p></p>
        )}
        <div className={inter.className}>
          <p className='article-date'>Abril 15 I 2023</p>
        </div>
        <div className={mont.className}>
          <p className='article-title'>{article.name}</p>
        </div>
        <div className={inter.className}>
          <p className='article-content'>{article.body}</p>
        </div>
        <div className={inter.className}>
          <h3 className="article-author">{article.email}</h3>
        </div>
        <div className='buttons flex justify-end '>
          <div>
            <a href="#" className='btn' type='button'>
              <BsFiletypePdf color='#178435' size={25}/>
            </a>
          </div>
          <div className="dropdown ms-6">
            <button className="more">
              <SlPaperClip color='#178435' size={25}/>
            </button>
            <ul className="dropdown-menu">
              <li className='ml-2 mb-2'>
                <a href="#"><FaFacebook color='#178435' size={30}/></a>
                <a href="#"><FaTelegram color='#178435' size={30}/></a>
                <a href="#"><FaWhatsapp color='#178435' size={30}/></a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-auto mb-4 border-t-4 border-green-700" />
      </div>
    );
  }