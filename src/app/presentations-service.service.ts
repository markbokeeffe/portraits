import { Injectable } from '@angular/core';

@Injectable()
export class PresentationsServiceService {
  public data: Array<{name: string, caption: string, path: string}> = [{
      name: "Mary McAleese",
      caption: "Presentation to the then President of Ireland, Mary McAleese.  Mulhuddert, Dublin, 2009.",
      path:'assets/presentations/maryMcAleese.jpg'
    },
    {
      name: "Bill O'Herlihy",
      caption: "Presentation of portrait by RTÉ to RTÉ broadcaster, Bill O'Herlihy, on the occasion of retirement.  RTÉ Studios, Dublin, 2014.  (Photo courtesy of RTÉ.)",
      path:'assets/presentations/billOHerlihy.jpg'
    },
    {
      name: "Desmond Tutu",
      caption: "Presentation to Desmond Tutu, Archbishop Emeritus of Capetown.  Dublin, 2009.",
      path:'assets/presentations/desmondTutu.jpg'
    },
    {
      name: "J.P. McManus",
      caption: "Presentation on behalf of Artane Boys Band to J.P. McManus on the occasion of the retirement of Istabraq.  Limerick, 2002.",
      path:'assets/presentations/jpMcManus.jpg'
    },
    {
      name: "Pope Benedict XVI",
      caption: "Presentation of portrait by the then Taoiseach, Bertie Ahern, to Pope Benedict XVI.  Vatican, 2005.",
      path:'assets/presentations/popeBenedict.jpg'
    },
    {
      name: "Smiley Bolger",
      caption: "Smiley Bolger displaying portrait of Phil Lynott to the audience at the 25th Vibe for Philo. Vicar Street, Dublin, 2011.  (Photo courtesy of DigiCol Photography.)",
      path:'assets/presentations/philLynott.jpg'
    },
    {
      name: "Joe Lynch",
      caption: "Presentation of portrait by the then Lord Mayor of Dublin, Eibhlin Byrne, Joe Lynch, Artane Musical Director.  Dublin, 2008.",
      path:'assets/presentations/joeLynch.jpg'
    },
    {
      name: "Albert Reynolds",
      caption: "Presentation to the former Taoiseach, Albert Reynolds.  Dublin, 2002.",
      path:'assets/presentations/albertReynolds.jpg'
    },
    {
      name: "George Bizos",
      caption: "Human Rights advocate, George Bizos, having been presented with a portrait on behalf of African Art Aid.  Johannesburg, 2012.",
      path:'assets/presentations/georgeBizos.jpg'
    },
    {
      name: "Ian McKeever",
      caption: "Presentation to world record-breaking mountaineer, Ian McKeever.  Dublin, 2008.",
      path:'assets/presentations/ianMcKeever.jpg'
    },
    {
      name: "Jesse Jackson",
      caption: "Presentation to U.S. Civil Rights campaigner, Jesse Jackson.  Dublin, 2004.",
      path:'assets/presentations/jesseJackson.jpg'
    },
    {
      name: "Bertie Ahern",
      caption: "Presentation to the then Taoiseach, Bertie Ahern.  Dublin, 2003.",
      path:'assets/presentations/bertieAhern.JPG'
    },
    {
      name: "Alex Ferguson",
      caption: "Presentation to Alex Ferguson.  Limerick, 2002.",
      path:'assets/presentations/alexFerguson.jpg'
    },
    {
      name: "John Bruton",
      caption: "Presentation to the former Taoiseach, John Bruton.  Dublin, 2002.",
      path:'assets/presentations/johnBruton.jpg'
    },
    {
      name: "John Bruton",
      caption: "Portrait of Michael Collins on display in the office of John Bruton, 2004.  (Photo courtesy of Colm Henry.)",
      path:'assets/presentations/johnBrutonOffice.jpg'
    },
    {
      name: "Luan Parle",
      caption: "Presentation to Irish musician, Luan Parle.  Dublin, 2008.",
      path:'assets/presentations/luanParle.jpg'
    },
    {
      name: "Michael D. Higgins",
      caption: "With my parents, presenting portrait to President Michael D. Higgins &amp; his wife, Sabina. Áras an Uachtaráin, 2013.",
      path:'assets/presentations/michaelDHiggins.jpg'
    },
    {
      name: "Noam Chomsky",
      caption: "Presentation to linguist and philosopher, Noam Chomsky.  Dublin, 2006.",
      path:'assets/presentations/noamChomsky.jpg'
    },
    {
      name: "Garret FitzGerald",
      caption: "Presentation to the former Taoiseach, Garret FitzGerald.  Dublin, 2006.",
      path:'assets/presentations/garretFitzGerald2.jpg'
    },
    {
      name: "Robert Ballagh",
      caption: "Presentation to Irish artist, Robert Ballagh.  Dublin, 2006.",
      path:'assets/presentations/robertBallagh2.jpg'
    },
    {
      name: "Robert Ballagh",
      caption: "Portrait on display in the studio of Robert Ballagh, 2007.  (Photo courtesy of The Irish Times.)",
      path:'assets/presentations/robertBallagh.jpg'
    },
    {
      name: "Norman Wisdom",
      caption: "Presentation to legendary British comedian, Norman Wisdom.  Dublin, 2004.",
      path:'assets/presentations/normanWisdom.jpg'
    },
    {
      name: "John Hume",
      caption: "Presentation to Nobel Laureate, John Hume.  Dublin, 2001.",
      path:'assets/presentations/johnHume.jpg'
    },
    {
      name: "Smiley Bolger",
      caption: "Presentation to Smiley Bolger.  Dublin 2010.",
      path:'assets/presentations/smileyBolger.jpg'
    },
    {
      name: "Micheál O Muircheataigh",
      caption: "Presentation to G.A.A. broadcaster, Micheál O Muircheataigh.  Dublin, 2010.",
      path:'assets/presentations/michealOMuircheartaigh.jpg'
    },
    {
      name: "T.K. Whitaker",
      caption: "Presentation to the public servant, T.K. Whitaker.  Dublin, 2005.",
      path:'assets/presentations/tkWhitaker.jpg'
    },
    {
      name: "F.W. De Klerk",
      caption: "Presentation to the former President of South Africa, F.W. De Klerk.  Dublin, 2004.",
      path:'assets/presentations/fwDeKlerk.JPG'
    },
    {
      name: "Chris Hadfield",
      caption: "Presentation to astronaut, Col. Chris Hadfield, on behalf of Eason, O'Connell Street.  Dublin, 2014.",
      path:'assets/presentations/chrisHadfield.jpg'
    }]
  constructor() { }

}
