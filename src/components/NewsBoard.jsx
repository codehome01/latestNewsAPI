import React from 'react'
import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import axios from 'axios'
import './NewsBoard.css'

const NewsBoard = ({category,country,setCountry}) => {
 
  const [article, setArticle] = useState([]);
  const getNews = () =>{
  
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    axios.get(URL)
    . then(response => setArticle(response.data.articles))
    .catch(error => alert(response.error))
  }

  useEffect(() => {
    getNews();
    setCountry(country)
  },[category, country])
  
  const sty = {
      width:'92vw',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center'
    }
  
  return (
    <>
      <div className='container myCon'>
      <div className='link' style={sty}>
                      <a href="#" onClick={() => setCountry("us")}>USA(us)</a>
                      <a href="#" onClick={() => setCountry("ua")}>Ukraine(ua)</a>
                      <a href="#" onClick={() => setCountry("ae")}>United Arab Emirates(ae)</a>
                      <a href="#" onClick={() => setCountry("ar")}>Argentina(ar)</a>
                      <a href="#" onClick={() => setCountry("at")}>Austria(at)</a>
                      <a href="#" onClick={() => setCountry("au")}>Australia(au)</a>
                      <a href="#" onClick={() => setCountry("be")}>Belgium(be)</a>
                      <a href="#" onClick={() => setCountry("bg")}>Bulgaria(bg)</a>
                      <a href="#" onClick={() => setCountry("br")}>Brazil(br)</a>
                      <a href="#" onClick={() => setCountry("ca")}>Canada(ca)</a>
                      <a href="#" onClick={() => setCountry("ch")}>Switzerland(ch)</a>
                      <a href="#" onClick={() => setCountry("cn")}>China(cn)</a>
                      <a href="#" onClick={() => setCountry("co")}>Colombia(co)</a>
                      <a href="#" onClick={() => setCountry("cu")}>Cubach(cu)</a>
                      <a href="#" onClick={() => setCountry("cz")}>Czechia(cz)</a>
                      <a href="#" onClick={() => setCountry("de")}>Germany(de)</a>
                      <a href="#" onClick={() => setCountry("eg")}>Egypt(eg)</a>
                      <a href="#" onClick={() => setCountry("fr")}>France(fr)</a>
                      <a href="#" onClick={() => setCountry("gb")}>United Kingdom(gb)</a>
                      <a href="#" onClick={() => setCountry("gr")}>Greece(gr)</a>
                      <a href="#" onClick={() => setCountry("hk")}>Hong Kong(hk)</a>
                      <a href="#" onClick={() => setCountry("hu")}>Hungary(hu)</a>
                      <a href="#" onClick={() => setCountry("id")}>Indonesia(id)</a>
                      <a href="#" onClick={() => setCountry("ie")}>Ireland(ie)</a>
                      <a href="#" onClick={() => setCountry("il")}>Israel(il)</a>
                      <a href="#" onClick={() => setCountry("in")}>India(in)</a>
                      <a href="#" onClick={() => setCountry("jp")}>Japan(jp)</a>
                      <a href="#" onClick={() => setCountry("kr")}>Korea(kr)</a>
                      <a href="#" onClick={() => setCountry("lk")}>Lithuania(lk)</a>
                      <a href="#" onClick={() => setCountry("lv")}>Latvia(lv)</a>
                      <a href="#" onClick={() => setCountry("ma")}>Morocco(ma)</a>
                      <a href="#" onClick={() => setCountry("mx")}>Mexico(mx)</a>
                      <a href="#" onClick={() => setCountry("my")}>Malaysia(my)</a>
                      <a href="#" onClick={() => setCountry("ng")}>Nigeria(ng)</a>
                      <a href="#" onClick={() => setCountry("no")}>Norways(no)</a>
                      <a href="#" onClick={() => setCountry("nz")}>New Zealand(nz)</a>
                      <a href="#" onClick={() => setCountry("ph")}>Philippines(ph)</a>
                      <a href="#" onClick={() => setCountry("pl")}>Poland(pl)</a>
                      <a href="#" onClick={() => setCountry("pt")}>Portugal(pt)</a>
                      <a href="#" onClick={() => setCountry("ro")}>Romania(ro)</a>
                      <a href="#" onClick={() => setCountry("rs")}>Serbia(rs)</a>
                      <a href="#" onClick={() => setCountry("ru")}>Russia(ru)</a>
                      <a href="#" onClick={() => setCountry("sa")}>South Africa(sa)</a>
                      <a href="#" onClick={() => setCountry("se")}>Sweden(se)</a>
                      <a href="#" onClick={() => setCountry("sg")}>Singapore(sg)</a>
                      <a href="#" onClick={() => setCountry("si")}>Slovenia(si)</a>
                      <a href="#" onClick={() => setCountry("th")}>Thailand(th)</a>
                      <a href="#" onClick={() => setCountry("tr")}>Türkiye(tr)</a>
                      <a href="#" onClick={() => setCountry("tw")}>Taiwan(tw)</a>
                      <a href="#" onClick={() => setCountry("ve")}>Venezuela(ve)</a>
                      <a href="#" onClick={() => setCountry("za")}>South Africa(za)</a>
                     
          </div>
        <div className='text-center'>
          <h1 className='fw-bold'>LATEST <span className='text-danger'>NEWS</span></h1>
        </div> 

       
          {
            article.map((d,i) => {
              return(
                  <NewsCard key={i} title={d.title} description={d.description} url={d.url} imageUrl={d.urlToImage}/> 
              )
            })
          }
        </div>       
  
    </>
  )
}

export default NewsBoard
