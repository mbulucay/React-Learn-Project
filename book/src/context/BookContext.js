import React, { useState, createContext } from "react";

export const BookContext = createContext([])

export const BookContextProvider = (props) => {

    const [books, setBooks] = useState(
        [
            {
                title: "Kirmizi Pazartesi",
                author: "Gabriel Garcia Marquez",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
                topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
            },
            {
                title: "Şeker Portakali",
                author: "Jose Muro de Vasconselos",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
                topic: "İrlandali yazar Bram Stoker`in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
            },
            {
                title: "En Uzun Yüzyil",
                author: "İlber Ortayli",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
                topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
            },
            {
                title: "Dracula",
                author: "Bram Stoker",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
                topic: "İrlandali yazar Bram Stoker`in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
            },
            {
                title: "Karamazov Kardeşler",
                author: "Fyodor Mihayloviç Dostoyevski",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
                topic: "İrlandali yazar Bram Stoker`in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
            },
            {
                title: "Sultanin Korsanlari",
                author: "Emrah Safa Gürkan",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
                topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
            }

        ]
    )

    return (
        <BookContext.Provider value={books}>
        {/* 
        Arrayin ilk elemani olarak return etmek icin 
        <BookContext.Provider value={[books]}> 
        */}
            {props.children}
        </BookContext.Provider>
    )
}

