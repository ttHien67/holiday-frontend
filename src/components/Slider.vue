<template>
    <div class="slider">
        <div class="slider-content content-section">
            <div class="slider__title">
                <p class="slider__title-sub-heading">OUR PACKAGES</p>
                <h1 class="slider__title-heading">Search your 
                    <span class="slider-title-heading-underline">Holiday</span>
                </h1>
            </div>

            <div class="slider__selection">
                <div class="slider__selection-content">
                    <div class="selctor-destination col-lg-4 col-sm-12">
                        <h5 class="selctor-destination__title">Select Your Destination: </h5>
                        <div class="selection-option">
                            <select name="" id="" class="selctor-destination__input">
                                <option value="">All Destination</option>
                                <option value="">Euro</option>
                                <option value="">  - Italy</option>
                                <option value="">  - Netherlands</option>
                                <option value="">Asia</option>
                                <option value="">  - Thailandia</option>
                                <option value="">United State</option>
                                <option value="">Oceania</option>
                            </select>
                            <img src="./assets/img/packages-page/destination-icon.png" alt="" class="selection-option__img">
                        </div>    
                    </div>

                    <div class="selctor-destination col-lg-4 col-sm-12">
                        <h5 class="selctor-destination__title">Select Your Date: </h5>
                        <div class="selection-option">
                            <input type="date" placeholder="mm-dd-yy" class="selection-option__input">
                        </div>    
                    </div>

                    <div class="selctor-destination col-lg-4 col-sm-12">
                        <h5 class="selctor-destination__title">Max Price: <span class="selctor-destination__price">5000</span> $</h5>
                        <div class="selection-option">
                            <input type="range" class="selection-option__progress" max="10000" min="0" step="1" value="5000">
                            <div class="selection-option__checkbox">
                                <input type="checkbox" class="selection-option__input-checkbox">
                                <span class="selection-option__checkbox-description">See only promotions</span>
                            </div>
                        </div>    
                    </div>
                </div>
                <div class="slider__filter">
                    <i class="slider__filter-icon ti-filter"></i>
                    <span class="slider__filter-title">MORE FILTERS</span>

                    <div class="filter__selection">
                        <div class="filter__content">
                            <div class="filter__content-list col-lg-3 col-sm-6">
                                <h2 class="filter__content-title">Typologies: </h2>
                                <ul class="">
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        Relax
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        Cultural
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        Sport
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        History
                                    </li>
                                </ul>
                            </div>

                            <div class="filter__content-list col-lg-3 col-sm-6">
                                <h2 class="filter__content-title">Durations: </h2>
                                <ul class="">
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        1 - 3 Days
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        3 - 6 Days
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        6 - 9 Days
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        9 - 12 Days
                                    </li>
                                </ul>
                            </div>

                            <div class="filter__content-list col-lg-3 col-sm-6">
                                <h2 class="filter__content-title">Difficulty: </h2>
                                <ul class="">
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        High
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        Low
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        Medium
                                    </li>
                                </ul>
                            </div>

                            <div class="filter__content-list col-lg-3 col-sm-6">
                                <h2 class="filter__content-title">Min Age: </h2>
                                <ul class="">
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        10 Years
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        18 Years
                                    </li>
                                    <li class="filter__content-item">
                                        <input type="checkbox" class="filter__content-item-checkbox">
                                        3 Years
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider__option">
                <div class="slider__option-content">
                    <div class="slider__option-filter">
                        <div class="slider__option-name">
                            <p class="slider__option-name-title">PRICE</p>
                            <i class="slider__option-name-icon ti-angle-down"></i>

                            <div class="slider__option-name-filter">
                                <a href="" class="slider__option-name-filter-item">LOWEST PRICE</a>
                                <a href="" class="slider__option-name-filter-item-2">HIGHEST PRICE</a>
                            </div>
                        </div>

                        <div class="slider__option-name">
                            <p class="slider__option-name-title">NAME</p>
                            <i class="slider__option-name-icon ti-angle-down"></i>

                            <div class="slider__option-name-filter">
                                <a href="" class="slider__option-name-filter-item">DESC</a>
                                <a href="" class="slider__option-name-filter-item-2">ASC</a>
                            </div>
                        </div>
                    </div>

                    <div class="slider__option-icon">
                        <i class="ti-menu-alt" id="change-to-list-2"></i>
                        <i class="ti-align-justify" id="change-to-list-1"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>