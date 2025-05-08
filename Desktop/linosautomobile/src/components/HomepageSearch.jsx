import React from 'react'
import HomeSearchByBrand from '../pages/search/HomeSearchByBrand'

export default function HomepageSearch() {
  return (
    <>
      <div className="car-search">
                            <h4> Find The Car</h4>
                        <HomeSearchByBrand/>
                          <form>
                         
                                <div class="form-group car-form">
                                <label for="exampleInputEmail1">Find By Model</label>
                                  <input type="text" class="form-control"  />
                                
                                </div>
                              
                              
                            </form>
                          </div>
    
    </>
  )
}
