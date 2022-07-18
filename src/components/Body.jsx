import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Box, Typography, CardMedia, CardContent } from '@mui/material';

function Body() {

  return (
    <Container>
      <Swiper
        // loop={true}
        autoplayTimeout={1}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/3/7/9/c/379c0075caf4fe8da27a39dfdf5de558.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/9/7/d/a/97da4c28157273e40e56e252dd1bc215.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/d/c/8/f/dc8f466c88922126dee606b7e2a5200e.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/2/e/9/6/2e964df05ab7ce5fc9865252797133ff.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/4/d/4/6/4d46712a5a944962f4350ff18ae0d6bf.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://photo-zmp3.zmdcdn.me/banner/a/e/6/9/ae69d2c7763b39d9b942ecc595d2d608.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <Box sx={{ marginTop: 5, paddingInline: 4 }}>
        <Typography sx={{ color: "white", margin: '20px 0' }}>
          Maybe you want to hear?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

        </Box>
      </Box>


      <Box sx={{ marginTop: 5, paddingInline: 4 }}>
        <Typography sx={{ color: "white", margin: '20px 0' }}>
          Can you listen this today?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

        </Box>
      </Box>


      <Box sx={{ marginTop: 5, paddingInline: 4 }}>
        <Typography sx={{ color: "white", margin: '20px 0' }}>
          Can you listen this today?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

        </Box>
      </Box>


      <Box sx={{ marginTop: 5, paddingInline: 4 }}>
        <Typography sx={{ color: "white", margin: '20px 0' }}>
          Can you listen this today?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

        </Box>
      </Box>

      <Box sx={{ marginTop: 5, paddingInline: 4 }}>
        <Typography sx={{ color: "white", margin: '20px 0' }}>
          Can you listen this today?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

          <Box sx={{
            width: 200,
            height: 300,
          }}>
            <CardMedia
              component={'image'}
              image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 3
              }}
            />
            <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
              <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
                Chill cung rap viet
              </Typography>
              <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
                Chill nhac cung anh long vo dung dep trai nao lll
              </Typography>
            </CardContent>
          </Box>

        </Box>
      </Box>


    </Container>
  )
}

const Container = styled.div`
  margin-top:70px;
  width: 100%;
  height: 82.8vh;
  overflow: auto;
  .swiper {
    width: 95%;
    height: 30%;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;


    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .swiper-slide {
      width: 40%;
    }
  }







`;

export default Body