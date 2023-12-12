import image from './img/logo.png'
import backgroundImage from '@/components/Navigationbar/img/Rectangle 49.png'
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { url } from 'inspector';
const Navigationbar = () => {

    return (
        <div className={styles.container}
    
        >
            {/* <Image src={img} alt="imagen de cabecera" /> */}

            <div className={styles.nav}>
                <Image src={image} alt="imagen de footer" width={213} height={74} className={styles.image}/>
                <nav>
                    <ul className={styles.nave}>
                        <li className={styles.naves}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 50 39" fill="none">
                                <path d="M49.5328 38.6679H0V3.07975H3.45321C3.45321 2.22804 3.48219 1.44005 3.44308 0.654969C3.41991 0.176964 3.56765 0.0205265 4.05144 0.00893854C9.12119 -0.118529 13.8462 1.11994 18.2714 3.55631C20.5383 4.80491 22.5632 6.37653 24.3681 8.23206C24.4883 8.35518 24.5738 8.51452 24.7809 8.80422C24.9605 8.529 25.0358 8.36242 25.1561 8.24075C29.9433 3.39987 35.7649 0.749121 42.5163 0.101642C43.5288 0.00459295 44.5558 0.0509449 45.5755 0.0176294C45.955 0.00459297 46.1028 0.134958 46.0883 0.536192C46.0593 1.35894 46.0796 2.18313 46.0796 3.05078H49.5357V38.6679H49.5328ZM25.6457 35.7651C31.2108 31.521 37.5509 29.9552 44.2661 29.5931V1.72831C43.2956 1.82101 42.3642 1.8746 41.4459 2.00497C35.394 2.86103 30.2229 5.4437 26.0092 9.89928C25.7485 10.1745 25.6384 10.4512 25.6384 10.835C25.6486 18.9365 25.6457 27.0365 25.6457 35.1379V35.7666V35.7651ZM5.26239 1.68195V29.5974C12.0196 29.9523 18.3452 31.5413 23.8857 35.7579C23.8857 35.5276 23.8857 35.4088 23.8857 35.2886C23.8857 27.1002 23.8901 18.9118 23.8698 10.7235C23.8698 10.4483 23.7003 10.1166 23.5062 9.90797C19.6735 5.7812 14.9384 3.28399 9.43262 2.23238C8.07537 1.9731 6.68772 1.86591 5.26239 1.68051V1.68195ZM47.7642 36.8833V4.88169H46.0782C46.0782 5.14241 46.0782 5.36838 46.0782 5.5929C46.0782 13.9725 46.0738 22.352 46.0883 30.7316C46.0883 31.2009 45.9739 31.337 45.4843 31.3718C43.4332 31.5167 41.3676 31.6123 39.3397 31.9309C35.155 32.5871 31.2398 34.0081 27.7387 36.4531C27.5765 36.5676 27.4215 36.6921 27.1709 36.8833H47.7642ZM22.3286 36.8776C22.1026 36.7008 21.9679 36.5676 21.81 36.4763C20.5788 35.7608 19.3852 34.967 18.1033 34.3586C13.684 32.2655 8.97779 31.4312 4.11808 31.3689C3.60096 31.3617 3.44018 31.2443 3.44163 30.6954C3.46191 22.3129 3.45466 13.9305 3.45466 5.54799C3.45466 5.32782 3.45466 5.1062 3.45466 4.88748H1.77006V36.8776H22.3286Z" fill="white"/>
                                <path d="M8.39987 6.47505C7.71183 6.45042 7.2599 6.79661 7.25266 7.35429C7.24686 7.88878 7.65823 8.14517 8.32599 8.26684C9.63398 8.50729 10.9623 8.7347 12.2167 9.15767C15.2744 10.189 17.9991 11.8664 20.6078 13.7393C21.1206 14.1072 21.6536 14.0536 21.9622 13.6335C22.275 13.2062 22.1635 12.6848 21.6551 12.3154C19.3578 10.6482 16.946 9.1736 14.3315 8.05681C12.4325 7.24565 10.4799 6.61555 8.39842 6.4765L8.39987 6.47505ZM8.57079 11.4246C7.70459 11.3985 7.25845 11.7244 7.25266 12.2937C7.24831 12.8412 7.66692 13.0845 8.37813 13.2164C9.70351 13.4612 11.0448 13.7016 12.3152 14.1347C15.3353 15.1631 18.028 16.8289 20.6093 18.6801C21.1293 19.0538 21.6493 18.9988 21.9622 18.5729C22.275 18.1441 22.1649 17.6227 21.6565 17.2533C19.2288 15.4934 16.6766 13.9493 13.894 12.8122C12.1457 12.0981 10.351 11.5535 8.57079 11.4246ZM8.57369 16.3668C8.45781 16.3668 8.40421 16.3668 8.35206 16.3668C7.67851 16.361 7.26135 16.6884 7.25411 17.2301C7.24687 17.7487 7.62782 18.0992 8.2724 18.1355C9.9092 18.2267 11.4504 18.7047 12.9597 19.2971C15.7104 20.3777 18.2134 21.9015 20.6064 23.6166C21.1365 23.9975 21.6319 23.9483 21.9564 23.5166C22.275 23.0922 22.1678 22.5664 21.6594 22.1985C19.3201 20.4994 16.8605 19.0017 14.191 17.8762C12.3702 17.1085 10.4987 16.5131 8.57369 16.3668ZM8.53023 21.3164C8.47809 21.3135 8.42449 21.3091 8.37234 21.3077C7.70169 21.2888 7.27583 21.6104 7.25266 22.1507C7.22948 22.6823 7.63217 22.9546 8.30427 23.0792C9.59488 23.3196 10.9058 23.5398 12.1457 23.9526C15.2252 24.9796 17.9643 26.6657 20.5904 28.5444C21.1365 28.9355 21.6623 28.8833 21.9766 28.4299C22.2765 27.9968 22.1534 27.4942 21.6333 27.1176C19.5374 25.5967 17.3429 24.2365 14.9818 23.1632C12.925 22.2275 10.8087 21.4829 8.53023 21.3149V21.3164Z" fill="white"/>
                                <path d="M42.2788 7.38759C42.2672 7.82069 41.9384 8.20744 41.4879 8.23641C38.013 8.46672 34.9943 9.95433 32.0683 11.6737C30.9631 12.3226 29.939 13.1063 28.8425 13.7726C28.5861 13.929 28.1458 13.9652 27.872 13.8537C27.6504 13.7639 27.4549 13.3786 27.4273 13.1077C27.4056 12.8817 27.5838 12.5442 27.7793 12.4023C31.1847 9.9268 34.7828 7.81779 38.9241 6.81543C39.6889 6.63002 40.4841 6.54746 41.2706 6.48517C41.8732 6.43737 42.2933 6.86323 42.2788 7.38904V7.38759Z" fill="white"/>
                                <path d="M42.2802 12.3053C42.2802 12.7528 41.9384 13.1541 41.4589 13.1859C37.9637 13.4163 34.9363 14.9256 31.9973 16.658C30.924 17.291 29.9115 18.0297 28.87 18.7178C28.3877 19.0364 27.9068 18.993 27.5954 18.6106C27.2781 18.2195 27.3187 17.6661 27.7561 17.3518C31.4208 14.717 35.268 12.4501 39.7801 11.5839C40.2958 11.4854 40.8274 11.4419 41.3517 11.4304C41.892 11.4188 42.2788 11.8171 42.2788 12.3067L42.2802 12.3053Z" fill="white"/>
                                <path d="M42.2803 17.2533C42.2759 17.6835 41.9616 18.0746 41.501 18.1123C37.1874 18.4599 33.5849 20.5269 30.0752 22.8184C29.6334 23.1067 29.2177 23.4355 28.7745 23.7194C28.3312 24.0018 27.846 23.9005 27.5592 23.5007C27.2811 23.111 27.339 22.5925 27.7634 22.2854C31.2616 19.7534 34.9509 17.5966 39.2182 16.629C39.9163 16.4711 40.6435 16.419 41.3605 16.3784C41.8979 16.348 42.2846 16.7623 42.2803 17.2533Z" fill="white"/>
                                <path d="M42.2803 22.1927C42.2774 22.6258 41.9515 23.0169 41.5024 23.0502C37.7711 23.3269 34.5627 24.9781 31.4484 26.8684C30.5924 27.3884 29.7812 27.9794 28.9512 28.5414C28.3877 28.9238 27.8808 28.8905 27.5592 28.4415C27.242 27.9983 27.3738 27.4913 27.9271 27.0958C31.192 24.7623 34.6221 22.7431 38.5504 21.7335C39.4456 21.5032 40.3813 21.4076 41.3054 21.3178C41.879 21.2627 42.2832 21.6828 42.2788 22.1912L42.2803 22.1927Z" fill="white"/>
                                <path d="M8.39976 6.47648C10.4812 6.61554 12.4338 7.24418 14.3328 8.05534C16.9473 9.17358 19.3591 10.6467 21.6564 12.3139C22.1648 12.6833 22.2778 13.2048 21.9635 13.6321C21.655 14.0536 21.1219 14.1057 20.6091 13.7378C17.9989 11.8663 15.2743 10.1875 12.218 9.1562C10.9621 8.73324 9.63533 8.50583 8.32733 8.26537C7.65958 8.14225 7.24676 7.88732 7.254 7.35282C7.26124 6.79515 7.71317 6.44896 8.40121 6.47358L8.39976 6.47648Z" fill="white"/>
                                <path d="M8.57209 11.426C10.3523 11.5535 12.147 12.0981 13.8953 12.8137C16.6779 13.9507 19.2301 15.4963 21.6578 17.2547C22.1662 17.6241 22.2778 18.1456 21.9635 18.5743C21.652 19.0016 21.1306 19.0552 20.6106 18.6815C18.0293 16.8303 15.338 15.1646 12.3165 14.1361C11.0461 13.703 9.70337 13.4626 8.37944 13.2178C7.66823 13.0874 7.24817 12.8426 7.25397 12.2951C7.25976 11.7244 7.70589 11.3985 8.57209 11.426Z" fill="white"/>
                                <path d="M8.5751 16.3683C10.5002 16.5146 12.3716 17.1099 14.1924 17.8776C16.8634 19.0031 19.3215 20.5008 21.6608 22.1999C22.1693 22.5693 22.2764 23.0951 21.9578 23.5181C21.6333 23.9497 21.1379 23.999 20.6078 23.618C18.2134 21.903 15.7118 20.3792 12.9612 19.2986C11.4504 18.7061 9.91062 18.2281 8.27381 18.1369C7.62923 18.1007 7.24683 17.7501 7.25552 17.2316C7.26421 16.6898 7.68138 16.3625 8.35348 16.3683C8.40563 16.3683 8.45922 16.3683 8.5751 16.3683Z" fill="white"/>
                                <path d="M8.53169 21.3178C10.8102 21.4844 12.9264 22.2303 14.9833 23.1661C17.3444 24.2394 19.5388 25.5995 21.6348 27.1205C22.1548 27.4971 22.2779 27.9997 21.9781 28.4328C21.6638 28.8862 21.138 28.9383 20.5919 28.5472C17.9658 26.6685 15.2267 24.981 12.1471 23.9555C10.9072 23.5412 9.59634 23.3225 8.30573 23.082C7.63362 22.9575 7.23095 22.6866 7.25412 22.1536C7.2773 21.6133 7.70315 21.2917 8.37381 21.3105C8.42595 21.312 8.47954 21.3163 8.53169 21.3192V21.3178Z" fill="white"/>
                            </svg>
                            <Link className={styles.navesLetras} href="/articulos">ARTICULOS</Link>
                        </li>




                        <li className={styles.naves}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                            <g clip-path="url(#clip0_36_544)">
                            <path d="M21.2747 32.9923C21.2747 32.811 21.2747 32.6782 21.2747 32.5454C21.2747 29.7032 21.2747 26.861 21.2747 24.018C21.2747 22.9795 20.8406 22.5496 19.7962 22.5496C17.9284 22.5496 16.0614 22.5496 14.1935 22.5496C13.1276 22.5496 12.7021 22.9735 12.7021 24.0375C12.7021 26.8908 12.6978 29.7449 12.7081 32.5982C12.709 32.9013 12.6393 33.0026 12.3136 33C10.297 32.9847 8.28039 32.9932 6.26381 32.9915C5.00796 32.9906 4.34951 32.3437 4.34951 31.1111C4.34866 26.0038 4.35295 20.8965 4.34522 15.7892C4.34436 15.0929 4.59364 14.5558 5.14377 14.1132C8.67065 11.2752 12.1863 8.4245 15.7063 5.57802C16.6261 4.83406 17.3447 4.83066 18.2567 5.56781C21.7853 8.42109 25.3113 11.2786 28.8459 14.1242C29.3866 14.5592 29.6316 15.0904 29.6307 15.7731C29.6239 20.8914 29.6282 26.0098 29.6265 31.129C29.6265 32.3267 28.9654 32.9889 27.7637 32.9915C25.7239 32.9957 23.685 32.9923 21.6452 32.9923C21.5429 32.9923 21.4415 32.9923 21.2765 32.9923H21.2747Z" fill="white"/>
                            <path d="M33.9999 13.7906C33.9775 14.1285 33.9999 14.4758 33.9251 14.8027C33.7265 15.6692 32.9632 16.1749 32.0512 16.0897C31.2363 16.0131 30.583 15.3398 30.5624 14.4494C30.5529 14.0545 30.3905 13.8459 30.1059 13.6238C26.1458 10.5236 22.1926 7.41498 18.2385 4.30718C17.3583 3.61599 16.613 3.61685 15.7242 4.3157C11.7521 7.43626 7.77995 10.5585 3.80266 13.674C3.55596 13.8672 3.41928 14.0511 3.41585 14.395C3.40725 15.3143 2.74967 16.0174 1.90813 16.0906C0.996975 16.1689 0.187247 15.6607 0.0548708 14.7891C-0.0448409 14.1277 0.00501495 13.4356 0.0583092 12.7623C0.0926925 12.3308 0.400424 12.0098 0.742538 11.7409C5.33702 8.13511 9.92548 4.52424 14.5217 0.924445C16.099 -0.311523 17.8844 -0.306416 19.4643 0.932106C24.051 4.5268 28.63 8.13085 33.2142 11.7281C33.7239 12.1282 33.9981 12.6304 33.9784 13.2807C33.9732 13.4501 33.9784 13.6204 33.9784 13.7906C33.9852 13.7906 33.993 13.7906 33.9999 13.7914V13.7906Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_36_544">
                            <rect width="34" height="33" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                            <Link className={styles.navesLetras} href="/home">INICIO</Link>
                        </li>



                        <li className={styles.naves}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 31 40" fill="none">
<path d="M0.450141 39.6261C0.0989672 39.4229 0 39.1079 0 38.7173C0.00425665 28.0895 0.00425665 17.4628 0 6.835C0 6.50405 0.0989672 6.24759 0.33734 6.01028C2.24006 4.12032 4.13321 2.21973 6.03168 0.324452C6.14874 0.207394 6.28388 0.108427 6.41052 0.000946045C13.2478 0.000946045 20.084 0.000946045 26.9212 0.000946045C27.2745 0.205265 27.366 0.525579 27.366 0.912934C27.3618 13.5126 27.3618 26.1134 27.366 38.7131C27.366 39.1004 27.2745 39.4207 26.9212 39.6251H0.450141V39.6261ZM7.25759 1.30561V1.74405C7.25759 3.2658 7.25759 4.78755 7.25759 6.30931C7.25759 7.0489 7.05966 7.2479 6.31474 7.24896C4.79299 7.25109 3.27124 7.24896 1.74948 7.24896C1.61114 7.24896 1.47387 7.24896 1.31637 7.24896V38.3215H26.0411V1.30561H7.25759ZM5.95293 2.32508C4.73659 3.54142 3.53302 4.74605 2.33903 5.93898H5.95399V2.32614L5.95293 2.32508Z" fill="white"/>
<path d="M29.088 39.6262C28.8219 39.4485 28.5495 39.2378 28.6708 38.8877C28.74 38.6898 28.9603 38.5355 29.1337 38.3865C29.2018 38.329 29.3295 38.3407 29.4551 38.3163V1.30892C29.0997 1.26103 28.7368 1.1908 28.6548 0.74385C28.5878 0.374586 28.8219 0.177715 29.088 0H30.3267C30.6778 0.203255 30.7779 0.519312 30.7768 0.90986C30.7725 13.5117 30.7725 26.1146 30.7768 38.7164C30.7768 39.1069 30.6778 39.4219 30.3267 39.6262H29.088Z" fill="white"/>
<path d="M5.56665 26.8499V32.3452H11.3461C11.3461 32.1877 11.3461 32.0494 11.3461 31.9111C11.3461 30.8799 11.3408 29.8477 11.3514 28.8165C11.3557 28.3993 11.6217 28.1312 11.9825 28.1322C12.3411 28.1333 12.6061 28.4068 12.6093 28.8229C12.6167 30.202 12.6178 31.5822 12.6093 32.9614C12.6061 33.4083 12.3613 33.6595 11.9091 33.6616C9.60089 33.6691 7.29272 33.6691 4.98455 33.6616C4.54824 33.6605 4.32477 33.4307 4.27369 33.0018C4.26518 32.9252 4.2673 32.8475 4.2673 32.7698C4.2673 30.6681 4.26518 28.5664 4.2673 26.4647C4.2673 25.7836 4.49184 25.5612 5.17291 25.5601C7.35231 25.558 9.53066 25.558 11.7101 25.5612C11.8633 25.5612 12.0602 25.541 12.1591 25.6229C12.339 25.774 12.5699 25.9911 12.5752 26.1869C12.5816 26.3838 12.372 26.6275 12.1932 26.7743C12.0772 26.8701 11.8495 26.8478 11.6707 26.8478C9.78818 26.852 7.90568 26.851 6.02317 26.851H5.56558L5.56665 26.8499Z" fill="white"/>
<path d="M13.6819 11.9272C16.4935 11.9272 19.305 11.9272 22.1165 11.9293C22.2825 11.9293 22.4538 11.9357 22.6135 11.9729C22.9338 12.0485 23.0881 12.2783 23.0764 12.5976C23.0657 12.8998 22.9051 13.1073 22.5996 13.1722C22.4624 13.201 22.3187 13.2137 22.1782 13.2137C16.5158 13.2159 10.8545 13.2159 5.19205 13.2137C5.03881 13.2137 4.88132 13.202 4.7334 13.1637C4.43117 13.086 4.24388 12.8466 4.30028 12.5678C4.34391 12.3528 4.53653 12.1347 4.72063 11.9953C4.84194 11.9027 5.06648 11.9303 5.24526 11.9293C8.05678 11.9261 10.8683 11.9272 13.6798 11.9272H13.6819Z" fill="white"/>
<path d="M13.6863 22.1506C16.4978 22.1506 19.3093 22.1506 22.1219 22.1506C22.7742 22.1506 23.0786 22.3538 23.0829 22.7891C23.0871 23.2275 22.7806 23.4403 22.1357 23.4403C16.4989 23.4403 10.8631 23.4403 5.22619 23.4403C4.58876 23.4403 4.27164 23.219 4.28122 22.7837C4.28973 22.3623 4.59727 22.1506 5.21236 22.1506C8.03665 22.1506 10.862 22.1506 13.6863 22.1506Z" fill="white"/>
<path d="M15.8349 5.96251C17.9494 5.96251 20.0638 5.96145 22.1783 5.96464C22.3433 5.96464 22.5178 5.97315 22.6721 6.02423C22.9648 6.12001 23.0956 6.35093 23.0744 6.65422C23.0541 6.94154 22.8998 7.13735 22.6157 7.20333C22.4667 7.23738 22.3092 7.24802 22.156 7.24909C17.927 7.25121 13.698 7.25121 9.46903 7.24909C9.32856 7.24909 9.18596 7.23844 9.04762 7.21184C8.72199 7.15118 8.55598 6.9309 8.55066 6.61484C8.54534 6.29666 8.71348 6.07318 9.0306 5.99869C9.17852 5.96358 9.33708 5.96464 9.49032 5.96464C11.6048 5.96251 13.7193 5.96358 15.8338 5.96358L15.8349 5.96251Z" fill="white"/>
<path d="M18.9092 15.3335C20.0042 15.3335 21.0993 15.3303 22.1943 15.3367C22.3592 15.3367 22.5753 15.3197 22.6774 15.4112C22.8498 15.5666 23.0477 15.8007 23.052 16.005C23.0552 16.1891 22.8413 16.4136 22.6678 16.552C22.5572 16.6403 22.3475 16.6233 22.1826 16.6233C20.0053 16.6275 17.828 16.6265 15.6507 16.6233C15.4986 16.6233 15.2996 16.6424 15.2027 16.5594C15.025 16.4073 14.7973 16.187 14.793 15.9912C14.7888 15.7943 15.0027 15.5591 15.1783 15.4069C15.2825 15.3165 15.4975 15.3367 15.6625 15.3356C16.7447 15.3303 17.827 15.3325 18.9092 15.3325V15.3335Z" fill="white"/>
<path d="M8.41978 15.3335C9.51481 15.3335 10.6098 15.3314 11.7049 15.3367C11.8698 15.3367 12.0848 15.3176 12.1891 15.408C12.3646 15.5602 12.5796 15.7954 12.5764 15.9922C12.5722 16.188 12.3412 16.403 12.1667 16.5616C12.0805 16.6392 11.8964 16.6244 11.757 16.6244C9.55418 16.6275 7.35136 16.6275 5.14855 16.6244C4.99637 16.6244 4.79524 16.6392 4.70266 16.5541C4.5292 16.3945 4.32063 16.171 4.31318 15.9667C4.30573 15.7826 4.51963 15.5538 4.69096 15.4123C4.7995 15.3229 5.0102 15.3388 5.17515 15.3378C6.2574 15.3325 7.33966 15.3346 8.42191 15.3346L8.41978 15.3335Z" fill="white"/>
<path d="M8.4633 18.7431C9.54556 18.7431 10.6278 18.7399 11.7101 18.7452C11.875 18.7452 12.091 18.7261 12.1943 18.8165C12.3688 18.9698 12.571 19.2017 12.5774 19.4061C12.5827 19.5902 12.372 19.8222 12.1975 19.9552C12.0751 20.0488 11.8527 20.0297 11.6749 20.0297C9.52321 20.0339 7.37147 20.0329 5.2208 20.0329C5.16972 20.0329 5.11757 20.0339 5.06649 20.0329C4.5674 20.0169 4.27156 19.7668 4.28433 19.3699C4.29604 18.9878 4.58017 18.7484 5.0633 18.7452C6.19663 18.7388 7.33103 18.7431 8.46437 18.7431H8.4633Z" fill="white"/>
<path d="M18.9495 20.0329C17.8544 20.0329 16.7594 20.0339 15.6644 20.0308C15.5239 20.0308 15.3803 20.0212 15.244 19.9882C14.9269 19.9126 14.7609 19.6977 14.7662 19.3752C14.7716 19.0528 14.9493 18.8474 15.2653 18.7772C15.3771 18.7527 15.4941 18.7431 15.6091 18.7431C17.8119 18.741 20.0147 18.741 22.2186 18.7431C22.358 18.7431 22.5027 18.7569 22.6379 18.7931C22.939 18.8751 23.0816 19.0975 23.0784 19.3965C23.0752 19.6796 22.9348 19.8945 22.6528 19.9712C22.4942 20.0148 22.3229 20.0265 22.1579 20.0276C21.0884 20.0318 20.0189 20.0297 18.9505 20.0297L18.9495 20.0329Z" fill="white"/>
<path d="M18.9082 26.8499C17.8259 26.8499 16.7436 26.852 15.6614 26.8467C15.4964 26.8467 15.2815 26.8669 15.1772 26.7765C15.0016 26.6243 14.7888 26.3881 14.793 26.1912C14.7973 25.9954 15.0218 25.7708 15.2027 25.6251C15.3123 25.5367 15.523 25.5612 15.6891 25.5601C17.8408 25.557 19.9915 25.558 22.1432 25.558C22.2592 25.558 22.3763 25.5548 22.4901 25.5729C22.8679 25.6325 23.0882 25.8783 23.0807 26.2178C23.0733 26.5541 22.8392 26.7935 22.4625 26.8414C22.3603 26.8542 22.2571 26.8488 22.1538 26.8488C21.0716 26.8488 19.9893 26.8488 18.9071 26.8488L18.9082 26.8499Z" fill="white"/>
<path d="M18.9081 30.2563C17.813 30.2563 16.718 30.2616 15.623 30.252C15.4357 30.2499 15.1909 30.2446 15.076 30.1339C14.9217 29.9849 14.7781 29.7242 14.7951 29.5252C14.811 29.3464 15.026 29.1517 15.1995 29.0336C15.3208 28.9516 15.523 28.9729 15.6879 28.9718C17.8396 28.9687 19.9903 28.9697 22.1421 28.9697C22.2197 28.9697 22.2974 28.9665 22.374 28.9718C22.8274 29.0048 23.087 29.2485 23.0796 29.6274C23.0711 30.0051 22.804 30.2499 22.3464 30.2542C21.2003 30.2627 20.0531 30.2574 18.907 30.2574L18.9081 30.2563Z" fill="white"/>
<path d="M16.7786 33.6648C16.354 33.6648 15.9304 33.6712 15.5058 33.6627C15.0482 33.6542 14.779 33.4243 14.7641 33.0487C14.7481 32.656 15.0152 32.391 15.492 32.3836C16.3529 32.3687 17.2149 32.3697 18.0758 32.3836C18.5557 32.391 18.826 32.6453 18.8186 33.0359C18.8111 33.4254 18.5323 33.6584 18.0513 33.6648C17.6267 33.6712 17.2032 33.6659 16.7786 33.6659V33.6648Z" fill="white"/>
</svg>
                            <Link className={styles.navesLetras} href="/volumenes">VOLUMENES</Link>
                        </li>



                        <button className={styles.botonIniciar}><Link href='/login' className={styles.botonIniciarLetras}>INICIAR SECCION</Link></button>
                        <button className={styles.botonRegistrar}><Link href='/logout' className={styles.botonRegistrarLetras}>REGISTRARSE</Link></button>
                        <li className={styles.navesSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<g clip-path="url(#clip0_3099_14)">
<path d="M12.8272 -0.000507242C13.2785 0.0787142 13.7285 0.162033 14.1805 0.235791C15.0395 0.376478 15.8643 0.63463 16.6632 0.97337C18.4904 1.74783 20.0363 2.9102 21.2866 4.44682C22.4617 5.89056 23.2633 7.52758 23.6709 9.35172C24.2001 11.7168 24.0335 14.0278 23.1704 16.2932C22.6747 17.5942 21.9728 18.7688 21.0646 19.8192C19.9667 21.0895 18.6605 22.0872 17.1433 22.8153C15.8964 23.4135 14.5861 23.7837 13.2178 23.9237C11.3448 24.1156 9.5217 23.8718 7.75595 23.2011C6.47226 22.7135 5.30329 22.0333 4.26131 21.1434C3.00494 20.0712 2.00394 18.7975 1.26582 17.3121C0.816525 16.4079 0.478533 15.4647 0.276421 14.4834C-0.0158232 13.0676 -0.104589 11.6437 0.154197 10.1986C0.391816 8.87298 0.776922 7.6068 1.40306 6.41916C1.88786 5.49992 2.48532 4.65717 3.19817 3.89159C3.82773 3.21547 4.51395 2.61175 5.27461 2.09408C6.04209 1.57163 6.86488 1.15094 7.73068 0.811513C8.79177 0.3956 9.90134 0.201644 11.0205 0.0411523C11.0785 0.032957 11.1352 0.0131516 11.1919 -0.00119019C11.7374 -0.00119019 12.2823 -0.00119019 12.8279 -0.00119019L12.8272 -0.000507242ZM21.008 12.0159C21.0223 7.06454 17.0197 2.98259 11.9948 2.98874C7.00554 2.99488 2.99538 6.97781 2.98241 11.994C2.96943 16.9986 7.02124 21.0116 11.9723 21.0178C16.9664 21.0239 21.0005 17.0041 21.0073 12.0166L21.008 12.0159Z" fill="white"/>
<path d="M31.9999 29.3536C31.8449 29.7559 31.7309 30.1806 31.526 30.5563C30.9402 31.6292 29.3766 32.2595 28.2526 31.8969C27.4483 31.6374 26.8816 31.1129 26.3182 30.5467C25.5275 29.7524 24.7362 28.9582 23.9448 28.1646C23.135 27.3533 22.3231 26.544 21.5153 25.7313C20.881 25.0934 20.2515 24.4508 19.6431 23.8334C20.3839 23.1976 21.1814 22.5911 21.8834 21.8897C22.5826 21.1911 23.1862 20.3968 23.8485 19.6244C24.4118 20.194 25.0066 20.7991 25.6054 21.4C26.4145 22.2114 27.2291 23.0179 28.0389 23.83C28.8365 24.6297 29.6299 25.4328 30.4254 26.2346C30.6821 26.4934 30.9436 26.7482 31.1949 27.0132C31.5861 27.425 31.7951 27.9317 31.9337 28.4733C31.9521 28.5464 31.9781 28.6174 32.0006 28.6891V29.3536H31.9999Z" fill="white"/>
<path d="M11.952 5.02647C7.8299 5.09545 4.9976 8.49787 5.03105 11.9542H6.98663C7.00029 10.5781 7.49737 9.4137 8.4499 8.46031C9.40788 7.50077 10.5823 7.00632 11.9527 6.98993V5.02579L11.952 5.02647Z" fill="white"/>
<path d="M11.952 5.02646V6.9906C10.5816 7.00699 9.40715 7.50145 8.44916 8.46098C7.49732 9.41437 6.99955 10.5788 6.9859 11.9549H5.03032C4.99686 8.49854 7.82917 5.09544 11.9513 5.02714L11.952 5.02646Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3099_14">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.nuevo}>
            </div>
        </div>
    )
}
export default Navigationbar;
