### 2. Build an AirBnb Experiences Clone
### Project Card Component 
```
Card.js 

<article className="card--container">
    <div className="card-img--state">SOLD OUT</div>
    <img src="../images/katie-zaferes.png" className="card--img" />
    <section className="card--scope">
        <img src="../images/star.png" className="card--star" />
        <span className="star">5.0</span>
        <span className="area">(6)•USA</span>
    </section>
    <section className="card--contents">
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
    </section>
</article>
```

```
App.css

.card--container{
    border: 1px solid red;
    position: relative;
    padding: 2rem;
}

.card-img--state{
    position: absolute;
    top: 2.5rem;
    left: 2.4rem;
    background-color: white;
    padding: 0.3rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
}

.card--img{
    width: 12rem;
    border-radius: 0.5rem;
}

.card--scope, .card--contents{
    border: 1px solid red;
    margin: -1rem;
}

.card--star{
    border: 1px solid red;
}
.star{
    border: 1px solid red;
    line-height: 1rem;
}

.area{    
    border: 1px solid red;
}
```
