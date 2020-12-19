import './StoryReel.css'

import React from 'react'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg"

                profileSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/124592311-185073559820653-4515148187985309671-n-1605107838.jpg?crop=0.532xw:0.711xh;0.241xw,0.0159xh&resize=640:*"

                title="Kylie Jenner"
            />
            <Story
                image="https://i.pinimg.com/originals/b5/d9/e4/b5d9e4cf2a511c53d84a080fa19f8c3e.jpg"

                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rhLwwocoiUJhUCXR307lNL2mHZhsQ1kiNg&usqp=CAU"

                title="Micheal Jordan"
            />
            <Story
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jackson-neverland-1551459971.jpg?crop=0.471xw:0.942xh;0.510xw,0.0288xh&resize=640:*"

                profileSrc="https://static.wikia.nocookie.net/real-life-heroes/images/2/2c/Michael_Jackson.jpg/revision/latest?cb=20191122190551"

                title="Micheal Jackson"
            />
            <Story
                image="https://cdn.britannica.com/82/212182-050-50D9F3CE/basketball-LeBron-James-Cleveland-Cavaliers-2018.jpg"

                profileSrc="https://www.biography.com/.image/t_share/MTY2NzA3MjE1MzQyNzczNTQw/lebron-james-photo-by-streeter-lecka_getty-images.jpg"

                title="Lebrom James"
            />
            <Story
                image="https://the007world.com/wp-content/uploads/2019/12/1967-ford-mustang-eleanor.jpg"

                profileSrc="https://m.economictimes.com/thumb/msid-70492367,width-1200,height-900,resizemode-4,imgsize-407112/ken-block-started-his-career-as-a-draughtsman.jpg"

                title="Loay kadmany"
            />
        </div>
    )
}

export default StoryReel
