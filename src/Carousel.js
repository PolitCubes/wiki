import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core'

SwiperCore.use([Pagination,Navigation])

export default (props) => {
    return (
        <Swiper pagination={{
            type: 'fraction'
        }} navigation={true}>
            {React.Children.map(props.children, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}
