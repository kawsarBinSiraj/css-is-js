export const html = `<div id='slider'>
    <div class="slider-container"> 
        <input checked id='slide-1' name='slides' type='radio'>
        <div class='slide-item'>
            <div class="slide-content"> 
                <h3>CSS is pretty good</h3>
                <p>Lorem ipsum dolor.</p>
            </div>
            <div class="slide-img"><img src="https://kawsarbinsiraj.github.io/slider-onlyCSS/img/slider-img-01.jpg"></div>
        </div>
        <nav class='slide-nav'>
            <label class='slide-prev' for='slide-1'></label>
            <label class='slide-next' for='slide-2'></label>
        </nav>
        <nav class='slide-dots'>
            <label class='slide-dot' for='slide-1'></label>
            <label class='slide-dot' for='slide-2'></label>
            <label class='slide-dot' for='slide-3'></label>
        </nav>

        <input id='slide-2' name='slides' type='radio'>
        <div class='slide-item'>
            <div class="slide-content"> 
                <h3>CSS is Awesome</h3>
                <p>Lorem ipsum dolor.</p>
            </div>
            <div class="slide-img"><img src="https://kawsarbinsiraj.github.io/slider-onlyCSS/img/slider-img-02.jpg"></div>
        </div>
        <nav class='slide-nav'>
            <label class='slide-prev' for='slide-1'></label>
            <label class='slide-next' for='slide-3'></label>
        </nav>
        <nav class='slide-dots'>
            <label class='slide-dot' for='slide-1'></label>
            <label class='slide-dot' for='slide-2'></label>
            <label class='slide-dot' for='slide-3'></label>
        </nav>

        <input id='slide-3' name='slides' type='radio'>
        <div class='slide-item'>
            <div class="slide-content"> 
                <h3>CSS is so pretty</h3>
                <p>Lorem ipsum dolor.</p>
            </div>
            <div class="slide-img"><img src="https://kawsarbinsiraj.github.io/slider-onlyCSS/img/slider-img-03.jpg"></div>
        </div>
        <nav class='slide-nav'>
            <label class='slide-prev' for='slide-2'></label>
            <label class='slide-next' for='slide-3'></label>
        </nav>
        <nav class='slide-dots'>
            <label class='slide-dot' for='slide-1'></label>
            <label class='slide-dot' for='slide-2'></label>
            <label class='slide-dot' for='slide-3'></label>
        </nav>
    </div>
</div>`;
