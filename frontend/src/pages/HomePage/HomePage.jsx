import { useState } from 'react';
import * as authService from '../../services/authService';

export default function HomePage() {
  return (
    <div className="container">
    <div className="header"><h1>Dynamic First Touch</h1></div>

    <div class="boxOne">
    <h2>Dynamic Warm-Up Drills</h2>
    <p>Stretching Excercise</p>
    <p>Agility Ladder Drill</p>
    <p>Jogging & Footwork Drill</p>
    </div>

    <div class="boxTwo">
    <h2>Dynamic Passing & Receiving Drills</h2>
    <p>1 Touch Passing Drill</p>
    <p>2 Touch Passing Drill</p>
    <p>Triangle Passing Drill</p>
    <p>Wall Passing Drill</p>
    <p>Pressure Passing Drill</p>
    </div>

    <div class="boxThree">
    <h2>Dynamic Shooting Drills</h2>
    <p>Power Shooting Drill</p>
    <p>Finesse Shooting Drill</p>
    <p>1 on 1 Finishing Drill</p>
    </div>

    <div class="boxFour">
    <h2>Dynamic Dribbling Drills</h2>
    <p>Cone Dribbling Drill</p>
    <p>Zigzag Dribbling Drill</p>
    <p>1V1 Attacking Drill</p>
    <p>Ball Control Gauntlet Drill</p>
    <p>Shadow Dribbling Drill</p>
    </div>

    <div class="boxOneA">
    <h2>Dynamic Defensive Drills</h2>
    <p>Pressure & Cover Drill</p>
    <p>Tackling Technique Drill</p>
    <p>Defensive Shape & Communication</p>
    </div>

    <div class="boxTwoB">
    <h2>Conditioning Drills</h2>
    <p>Interval Training for Endurance</p>
    <p>Speed & Agility Circuit</p>
    <p>Plyometric Excercises for Explosiveness</p>
    </div>

    <div class="boxThreeC">
    <h2>Goalkeeping Drills</h2>
    <p>Reaction Time Drill</p>
    <p>Positioning Drill</p>
    <p>Distribution Drill</p>
    <p>Cross Catching Drill</p>
    </div>

    <div class="boxFourD">
    <h2>Coordination & Teamwork Drills</h2>
    <p>Small-Sided Games</p>
    <p>Possession & Transition Drill</p>
    <p>Overlapping Runs & Crosses Drill</p>
    </div>

    </div>
  )
}
