import { Carousel } from "flowbite-react";

export default function Page() {
    return (
        <article className="prose lg:prose-xl">
            <h1>Село Търговище</h1>
            <div className="h-[425px]">
            <Carousel>
                <img src="https://ivanov.pro/_astro/22154558_169646503613246_5751011380852670502_n.FKS2Ksb6_MYKaD.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22154693_169644763613420_1789526302906805102_n.vloWzLHN_Z1dbHs1.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22195325_169644936946736_2868226277604920086_n.Bn6XrpTH_Z1lSQhF.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22195704_169645066946723_7174050317039520359_n.BsHi9nXI_ZQu9k5.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22196121_169645036946726_7537246121681693616_n.B2HMvULG_14u0I3.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22196382_169645126946717_9183420010194479632_n.BFMWV97N_ZDQbDa.webp" alt="" />
                <img src="https://ivanov.pro/_astro/22221702_169645093613387_6369863239477486697_n.BCVQERr1_sw8Qj.webp" alt="" />
                <img src="https://ivanov.pro/_astro/23A0B205-5791-4198-BEB4-9F0FA08AECD6.CqcIqvyR_KDDve.webp" alt="" />
                <img src="https://ivanov.pro/_astro/2E75CAAE-E6CC-4D78-B852-4DF256CDEF8B.BCp6Yeza_MllEb.webp" alt="" />
                <img src="https://ivanov.pro/_astro/3B98BC7B-495D-489D-95D8-71F9D6803711.79CzmHHb_Z1s1rVy.webp" alt="" />
                <img src="https://ivanov.pro/_astro/7917445C-AB52-4473-A03E-AA5738ADA616.RfaD9qf7_ZcMnRD.webp" alt="" />
                <img src="https://ivanov.pro/_astro/9BCD0143-85DB-4602-B6FB-A9DBA33AF1E9.ChhZK_G9_1lvjMJ.webp" alt="" />
                <img src="https://ivanov.pro/_astro/AD06619B-7044-46B8-96E3-E93EDA194F55.inailwrH_Z7Whdb.webp" alt="" />
                <img src="https://ivanov.pro/_astro/B2A2C5AB-A1E8-43E4-AED8-7195C56E9F2A.E-jthRls_Zf5TxH.webp" alt="" />
                <img src="https://ivanov.pro/_astro/C527E5BB-AD98-44B9-98B4-68792B96CDD7.CaVM7mhb_Zpdx8w.webp" alt="" />
            </Carousel>
            </div>
            <p>
                Наименованието на село Търговище идва от думата „търговия“, но точната връзка между двете е неясна. 
                За разлика от други селища с това име, няма никакви свидетелства за наличието на пазар или панаир в селото. 
                Вероятно името е свързано с транзитна търговия по пътя, минаващ през близкия Светиниколски проход и свързващ Дунав с Поморавието. 
                Местна легенда извежда наименованието на селото от негово основаване от трима търговци.
            </p>
        </article>
    );
}