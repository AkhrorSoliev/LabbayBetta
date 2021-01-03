import React from 'react'
import './404.css'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: '#fff', height: '100vh' }}
    >
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h1 class="h2">So'ralgan sahifa topimadi !</h1>

                  <Link to="/" class="link_404">
                    Qaytish
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
