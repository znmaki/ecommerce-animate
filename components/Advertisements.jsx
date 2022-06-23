import Image from 'next/image'
import React from 'react'
import adLeft from '../public/images/ad-left.jpg'
import adRight from '../public/images/ad-right.jpg'
import prueba from '../public/images/prueba.png'
import miniAds1 from '../public/images/miniAds1.jpg'
import miniAds2 from '../public/images/miniAds2.jpg'
import miniAds3 from '../public/images/miniAds3.jpg'
import miniAds4 from '../public/images/miniAds4.jpg'
import miniAds5 from '../public/images/miniAds5.jpg'
import miniAds6 from '../public/images/miniAds6.jpg'

const Advertisements = () => {
    return (
        <div className='grid grid-rows-ads grid-cols-ads max-w-[1420px] gap-x-6 mx-auto mt-[17px]'>
            <div className='row-span-2 pointerAds'>
                <Image src={adLeft} />
            </div>
            <div className='w-[810px] h-[340px] pointerAds'>
                <Image src={prueba} />
            </div>
            <div className='bg-cyan-700 row-span-2'>
                <ul className='space-y-[10px] text-sm'>
                    <li className='pointerAdsSub'>発売日カレンダー</li>
                    <li className='pointerAdsSub'>ポイント景品</li>
                    <li className='pointerAdsSub'>特集一覧</li>
                    <li className='pointerAdsSub'>一括購入商品</li>
                    <li className='pointerAdsSub'>うたの☆プリンスさまっ♪</li>
                    <li className='pointerAdsSub'>あんさんぶるスターズ!</li>
                    <li className='pointerAdsSub'>アイドリッシュセブン IDOLiSH7</li>
                    <li className='pointerAdsSub'>呪術廻戦</li>
                    <li className='pointerAdsSub'>名探偵コナン</li>
                    <li className='pointerAdsSub'>SPYxFAMILY</li>
                    <li className='pointerAdsSub'>プロジェクトセカイ カラフルステージ! feat. 初音ミク</li>
                    <li className='pointerAdsSub'>刀剣乱舞-ONLINE-</li>
                    <li className='pointerAdsSub'>ヒプノシスマイク-Division Rap Battle-</li>
                    <li className='pointerAdsSub'>ハイキュー!!</li>
                </ul>
            </div>
            <div className='row-span-2 pointerAds'>
                <Image src={adRight} />
            </div>
            <div className='grid grid-cols-ads-mini grid-rows-ads-mini gap-x-[9px] gap-y-[9px] mt-[30px]'>
                <div className='pointerAds'><Image src={miniAds1} /></div>
                <div className='pointerAds'><Image src={miniAds2} /></div>
                <div className='pointerAds'><Image src={miniAds3} /></div>
                <div className='pointerAds'><Image src={miniAds4} /></div>
                <div className='pointerAds'><Image src={miniAds5} /></div>
                <div className='pointerAds'><Image src={miniAds6} /></div>
            </div>
        </div>
    )
}

export default Advertisements