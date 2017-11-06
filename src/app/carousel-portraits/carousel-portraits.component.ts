import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-carousel-portraits',
  templateUrl: './carousel-portraits.component.html',
  styleUrls: ['./carousel-portraits.component.css']
})
export class CarouselPortraitsComponent implements OnInit {

  public imageSources: string[] = [
    'assets/jack-nicholson-portrait-2015.jpg',
    'assets/billieHoliday.jpg',
    'assets/morganFreeman.jpg',
    'assets/jackCharlton.jpg',
    'assets/marilynMonroe.jpg',
    'assets/quentinBlake.jpg',
    'assets/liamCosgrave.jpg',
    'assets/yuliaTymoshenko.jpg',
    'assets/albertEinstein.jpg',
    'assets/noraBarnacle.jpg',
    'assets/tomCrean.jpg',
    'assets/alfredHitchcock.jpg',
    'assets/normanWisdom.jpg',
    'assets/motherTeresa.jpg',
    'assets/samuelBeckett1.jpg',
    'assets/seamusHeaney.jpg',
    'assets/garretFitzGerald.jpg',
    'assets/noamChomsky.jpg',
    'assets/marleneDietrich.jpg',
    'assets/seamusMallon.jpg',
    'assets/portraits/samuelBeckett2.jpg',
    'assets/luanParle.jpg',
    'assets/bbKing.jpg',
    'assets/eamonDeValera.jpg',
    'assets/michaelCollins.jpg',
    'assets/graceKelly.jpg',
    'assets/nelsonMandela.jpg',
    'assets/samuelBeckett3.jpg',
    'assets/joeBiden.jpg',
    'assets/popeFrancis.jpg',
    'assets/gayByrne.jpg',
    'assets/josephineCunningham.jpg',
    'assets/billOHerlihy.jpg',
    'assets/edmundHillary.jpg',
    'assets/seanMacBride.jpg',
    'assets/joeLynch.jpg',
    'assets/jamesJoyce.jpg',
    'assets/michaelDHiggins.jpg',
    'assets/louisArmstrong.jpg',
    'assets/salvadorDali.jpg',
    'assets/louisLeBrocquy.jpg',
    'assets/wbYeats1.jpg',
    'assets/edmundHillary2.jpg',
    'assets/aungSanSuuKyi.jpg',
    'assets/robertBallagh.jpg',
    'assets/maryRobinson.jpg',
    'assets/mahatmaGandhi.jpg',
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 5000,
    stopAutoplayMinWidth: 768
  };




  constructor() { }

  ngOnInit() {
  }

}
