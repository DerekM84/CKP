import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Classroomtoggle from "../Toggles/Classroomtoggle";
import Enrichmenttoggle from "../Toggles/Enrichmenttoggle";
import "./Curriculumtabs.css";

const Curriculumtabs = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="nav-container">
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Four Classrooms
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Course Enrichment
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            The 2's
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            The 3's
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Pre-K
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            Pre-K+
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <p>
            <strong>Our</strong> classrooms are cheerful and light filled. They
            are very spacious with twice the floor area per student compared to
            most preschools and day-cares.
          </p>

          <p>
            We keep&nbsp;our class sizes deliberately small. In our 2's
            classroom, there is a max of 8 children and the other rooms have no
            more than 12.
          </p>

          <b>Click on a classroom to take a peak inside!</b>
          <div className="classroom-toggle-container">
            <Classroomtoggle
              title="The 2's Classroom"
              text=""
              img="/images/Classrooms/2A.jpg"
              img2="/images/Classrooms/2B.jpg"
            />
          </div>
          <div className="classroom-toggle-container">
            <Classroomtoggle
              title="The 3's Classroom"
              text=""
              img="/images/Classrooms/3A.jpg"
              img2="/images/Classrooms/3B.jpg"
            />
          </div>
          <div className="classroom-toggle-container">
            <Classroomtoggle
              title="Pre-K Classroom"
              text=""
              img="/images/Classrooms/PreK1.jpg"
              img2="/images/Classrooms/PreK2.jpg"
            />
          </div>
          <div className="classroom-toggle-container">
            <Classroomtoggle
              title="Pre-K+ Classroom"
              text=""
              img="/images/Classrooms/Kplus1.jpg"
              img2="/images/Classrooms/Kplus2.jpg"
            />
          </div>
        </TabPane>

        <TabPane tabId="2">
          <p>
            <b>At</b> Curious Kids we believe in providing a broad experience to
            all of our students. These Enrichment classes are included!
          </p>

          <div className="enrichment-toggle-container">
            <Enrichmenttoggle
              title="Art Masterpieces"
              img="/images/Building/art-gallery.jpg"
              img2="/images/Misc/art2.jpg"
              text=" At Curious Kids we promote free art expression.
              The kids work on a special art masterpiece project several times in
              the year and have their completed works displayed in our art gallery.
              Unveiling day is looked forward to by parents and kids alike.
              Preschool art is about the process, not the final product. There is so
              much a child can learn through art, such as colors, shapes, fine motor
              skills, communication skills, social skills as well as self-esteem. In
              our Art Masterpiece program, the students choose the size and color of
              their canvas and decide how they want to exhibit their work. Once a
              gallery is mounted each class has an art appreciation lesson, where
              the kids get to see and talk not only about their work, but the others
              as well. Through our art gallery our students learn that art can be
              fun and creative. Even though the students follow the same technique,
              the results are different and unique. We are always delighted and
              astonished by their creativity!
    "
            />
          </div>

          <div className="enrichment-toggle-container">
            <Enrichmenttoggle
              title="Science"
              img="/images/Misc/mission.jpg"
              img2="/images/Misc/parachute.jpg"
              text=" We believe that science is so
              important that each class conducts a hands-on experiment every week.
              Engaging children in science makes them question the world about them
              and encourages them to use their curiosity to discover new sights,
              sounds, smells and textures. Our kids actively participate in science
              lessons so they learn to observe, measure, pour, mix and stir. They
              are encouraged to look, touch, and smell at all stages. Our older kids
              are introduced to the scientific method of making predictions before
              conducting an experiment, recording data, and analyzing results. We
              give our curious kids lasting memories through fun experiments
              designed to foster a love for science."
            />
          </div>

          <div className="enrichment-toggle-container">
            <Enrichmenttoggle
              title="Yoga"
              img="/images/Misc/dance.jpg"
              img2="/images/Misc/group2.jpg"
              text="Childrens' Yoga is a fun way for kids to develop
              important skills in a supportive environment. The nurturing
              environment we provide in our yoga lesson by our certified
              children's yoga teacher encourages the kids to relax, have fun
              while they develop not only strength, co-ordination, flexibility and
              balance, but also body awareness, better focus and concentration. Each
              class has a yoga lesson once a week.
              We balance structure and spontaneity so the kids
              learn to listen to each other as well as to express creativity. We
              know that kids learn best when they are having fun, so we interweave
              story, song, games and poses, which makes it much more active - and
              fun - than adult's yoga classes!
              A central tenant of yoga is respect and honor
              for ourselves, for each other, and for our environment. In our yoga
              classes the children often go on magical journeys around the world,
              learning about the different animals and cultures in the process."
            />
          </div>

          <div className="enrichment-toggle-container">
            <Enrichmenttoggle
              title="Gross Motor Skills"
              img="/images/Misc/lazer.jpg"
              img2="/images/Misc/group2.jpg"
              text="
              Exercising bodies as well as minds. As
              part of the Arizona Department of Health Services Empower Program,
              we've included teacher led physical activity every day. This helps develop physical
              co-ordination and we also encourage co-operation and team-work.
              Mathercize, Lazer mazes, Musical chairs, Sports week, 
              Balance beams, Tumbling mats, Tunnels, Hoops, and More! "
            />
          </div>
        </TabPane>

        <TabPane tabId="3">
          <p>
            <b>
              In the course of the year each student in the 2's will work
              towards these curriculum goals:
            </b>
          </p>

          <strong>Language &amp; Communication</strong>
          <ul>
            <li>Using 4 or 5 word sentences</li>
            <li>Using age-appropriate speech patterns</li>
            <li>Saying their name, age and gender</li>
            <li>Naming familiar objects</li>
            <li>
              Naming these eight basic colors: red, orange, yellow, green, blue,
              purple, black, and brown
            </li>
            <li>
              Naming these four basic shapes: circle, square, rectangle,
              triangle
            </li>
            <li>Identifying happenings in pictures</li>
          </ul>
          <strong>Reading &amp; Writing</strong>
          <ul>
            <li>Singing the ABC song</li>
            <li>Recognizing their written first name</li>
            <li>Recognizing some letters of the alphabet</li>
            <li>Knowing some letter sounds</li>
          </ul>
          <strong>Numbers &amp; Counting</strong>
          <ul>
            <li>Counting to 10</li>
            <li>Counting up to 10 objects</li>
            <li>Showing understanding of the meaning of one, two and three</li>
            <li>Recognizing some of the numerals</li>
          </ul>
          <strong>Social &amp; Emotional</strong>
          <ul>
            <li>Playing cooperatively with other children for a time</li>
            <li>Taking turns with help from the teacher</li>
            <li>
              Participating in group activities such as singing, dancing,
              stories
            </li>
            <li>Speaking to the teacher and classmates</li>
            <li>Exhibiting good manners</li>
            <li>Putting away classroom toys and snack time dishes</li>
            <li>
              Beginning to control their emotions and use words to express needs
            </li>
          </ul>
          <strong>Cognitive</strong>
          <ul>
            <li>Building a tower of more than six blocks</li>
            <li>Stacking rings on a peg in order of size</li>
            <li>Doing puzzles of up to eight pieces</li>
            <li>Grouping objects by a single category</li>
            <li>Matching a picture to an object</li>
            <li>
              Identifying body parts: eyes, nose, mouth, ears, hair, cheeks,
              chin, arms, legs, feet, hands, fingers, toes, elbows, knees
            </li>
            <li>Looking at books for pleasure</li>
            <li>
              Showing understanding of simple concepts such as “all” and “none”
            </li>
          </ul>
          <strong>Fine Motor Skills</strong>
          <ul>
            <li>Holding a pencil or crayon with two fingers and thumb</li>
            <li>Drawing circles, lines, and crosses</li>
            <li>Painting or color dots and lines</li>
            <li>Using scissors with assistance</li>
            <li>Using a glue stick</li>
            <li>Stringing large beads</li>
            <li>Washing and drying hands</li>
          </ul>
          <strong>Large Motor Skills</strong>
          <ul>
            <li>Running easily</li>
            <li>Jumping up and down</li>
            <li>Climbing simple structures</li>
            <li>Balancing on one foot for a few seconds</li>
            <li>Walking backwards and on tiptoes</li>
            <li>Kicking a ball forward</li>
            <li>Throwing a ball overhand</li>
            <li>Using feet to propel a riding toy</li>
          </ul>
        </TabPane>

        <TabPane tabId="4">
          <p>
            <b>
              In the course of the year each student in the 3's will work
              towards these curriculum goals:
            </b>
          </p>
          <strong>Language &amp; Communication</strong>
          <ul>
            <li>speak in sentences using age-appropriate speech patterns</li>
            <li>
              name more shapes including: heart, star, diamond, oval, and cross
            </li>
            <li>say their full name, age, gender and know their birthday</li>
            <li>ask “who”, “what”, “when”, “where”, and “why” questions</li>
            <li>follow instructions with three or four steps</li>
            <li>recite the days of the week</li>
            <li>recognize words that rhyme</li>
            <li>retell a story in sequence</li>
            <li>sing a song or recite a poem or nursery rhyme from memory</li>
          </ul>
          <strong>Reading &amp; Writing</strong>
          <ul>
            <li>recognize and name many lower and upper case letters</li>
            <li>write some letters</li>
            <li>know the sounds of many letters</li>
            <li>recognize and write their first name</li>
          </ul>
          <strong>Numbers &amp; Counting</strong>
          <ul>
            <li>count to 20 by rote</li>
            <li>count up to 20 objects</li>
            <li>recognize and name the numbers 0 to 10</li>
            <li>write numbers 1 to 10</li>
            <li>
              show an understanding of the meaning of one, two, three, four, and
              five
            </li>
            <li>show and understanding of adding and subtracting objects</li>
            <li>
              show an understanding of “more” and “fewer”, “larger” and
              “smaller”
            </li>
          </ul>
          <strong>Social &amp; Emotional</strong>
          <ul>
            <li>enjoy doing new things</li>
            <li>cooperate and share with others</li>
            <li>show a preference for playing with others</li>
            <li>be content to play alone at times</li>
            <li>show pride in accomplishments</li>
            <li>exhibit good manners</li>
            <li>clean up after activities, play, and snack time</li>
            <li>use words to express feelings</li>
            <li>be independent in the bathroom</li>
          </ul>
          <strong>Cognitive</strong>
          <ul>
            <li>complete a task or activity</li>
            <li>
              show an understanding of spatial relations such as “above”,
              “inside”, “next to”
            </li>
            <li>draw a person with two to four body parts</li>
            <li>sequence objects by size in a line</li>
            <li>sort objects by size, color, or shape</li>
            <li>do puzzles up to 12 pieces</li>
            <li>paint, color, and draw with a purpose</li>
          </ul>
          <strong>Fine Motor Skills</strong>
          <ul>
            <li>cut around a shape with scissors</li>
            <li>trace a figure</li>
            <li>colors within lines</li>
            <li>use a glue stick properly</li>
            <li>
              copy a circle, square, cross, X, and vertical and horizontal lines
            </li>
            <li>manipulate play dough or clay into a ball, snake, etc.</li>
            <li>turn book pages one by one</li>
          </ul>
          <strong>Large Motor Skills</strong>
          <ul>
            <li>stand and hop on one foot</li>
            <li>walk in a line forward and backward</li>
            <li>catch a large bounced ball</li>
            <li>jump up and down with both feet</li>
          </ul>
        </TabPane>
        <TabPane tabId="5">
          <p>
            <b>We</b> have an ambitious pre-k program that prepares the kids for
            kindergarten. Our curriculum involves the following resources and goals:
          </p>

          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.cusd80.com/cms/lib/AZ01001175/Centricity/Domain/24/2017-2018%20CUSD%20Elementary%20Handbook.pdf"
              >
                KIST
              </a>{" "}
              assessment before kindergarten entry.
            </li>
            <li>
              <a
                target="_blank"
                href="https://dibels.uoregon.edu/docs/dibelsparentguide.pdf"
              >
                DIBELS
              </a>{" "}
              assessment during the kindergarten and elementary years.
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.zaner-bloser.com/zaner-bloser-handwriting"
              >
                Zaner-Bloser
              </a>{" "}
              handwriting practices.
            </li>
            <li>
              <a
                target="_blank"
                href="http://mathcoachscorner.blogspot.com/2013/07/teaching-number-bonds.html"
              >
                Number Bonds
              </a>{" "}
              techniques, plus more.
            </li>
          </ul>

          <strong>Language &amp; Communication</strong>
          <ul>
            <li>speaks clearly with few pronunciation or grammatical errors</li>
            <li>uses “and,” “but” and “then” to make compound sentences</li>
            <li>uses modal words like "can," "will," "should," and "might"</li>
            <li>refers to causality by using "because" and "so"</li>
            <li>
              uses mental state words such as: know, don't know, forget,
              remember, wonder
            </li>
            <li>
              knows complex emotion words such as: surprised, proud, curious
            </li>
            <li>
              recognizes the humor in simple jokes; makes up jokes and riddles
            </li>
            <li>generates a series of 4-5 rhyming words</li>
            <li>names 4-5 words that begin with the same sound</li>
            <li>follows multi-step directions</li>
            <li>
              knows time words such as: yesterday, today, tomorrow, morning,
              afternoon, night, before, after
            </li>
            <li>waits for a turn in a group conversation</li>
            <li>
              uses past and future tenses; learning to use past tense of
              irregular verbs: went, caught, swam, etc.
            </li>
            <li>knows days of the week, months and the seasons</li>
            <li>
              uses words representing physical relations or positions, such as:
              over, under, above, below, beside, in front, behind, inside,
              outside, between, top, bottom, left, right, before, after
            </li>
            <li>understands comparatives like loud, louder, loudest</li>
          </ul>
          <strong>Reading &amp; Writing</strong>
          <ul>
            <li>knows most uppercase and lowercase letters</li>
            <li>writes legibly most upper and lowercase letters</li>
            <li>
              understands that letters represent the sounds in spoken words
            </li>
            <li>associates letters with their sounds (phonemes)</li>
            <li>
              writes a few words correctly from memory such as their name, “no”,
              “yes”, “mom”, “dad”
            </li>
            <li>
              isolates the beginning and ending sounds in simple words (phonics)
            </li>
            <li>
              knows that writing goes from left-to-right and top to bottom
            </li>
            <li>
              knows that the names of the author and illustrator are on the
              cover of the book, along with the title of the book
            </li>
            <li>
              understands difference between make-believe and realistic (fiction
              and non-fiction) stories/books
            </li>
          </ul>
          <strong>Numbers &amp; Counting</strong>
          <ul>
            <li>counts to 100 by rote</li>
            <li>counts by tens to 100</li>
            <li>counts up to 30 objects</li>
            <li>counts backwards from ten</li>
            <li>reads and writes numbers up to 100</li>
            <li>knows ordinals from first to tenth</li>
            <li>
              understands simple addition and subtraction equations using
              numbers up to five
            </li>
            <li>adds/subtracts with up to 10 objects</li>
            <li>understands the concept of half</li>
            <li>understands and make simple graphs</li>
            <li>begins to use ruler to measure length</li>
          </ul>
          <strong>Social &amp; Emotional</strong>
          <ul>
            <li>cleans up without constant supervision</li>
            <li>plays cooperatively, be generous, take turns, share toys</li>
            <li>enjoys imaginative play with other children</li>
            <li>shows concern and sympathy for others</li>
            <li>suggests ways to resolve conflicts</li>
            <li>uses words to express emotions and preferences</li>
            <li>improved ability to calm oneself, uses coping strategies</li>
            <li>wants to try new experiences</li>
            <li>enjoys and often has one or two focus friendships</li>
          </ul>
          <strong>Cognitive</strong>
          <ul>
            <li>draws a person with at least 6 body parts</li>
            <li>draws, names, and describes pictures</li>
            <li>forms rectangle from two triangular cuts</li>
            <li>understands concept of same shape (congruence)</li>
            <li>
              shows some understanding of moral reasoning, such as fairness,
              good or bad behavior, good choices
            </li>
            <li>
              builds three-dimensional structures with small cubes by copying
              from a picture or model
            </li>
            <li>
              can identify and sort by multiple properties such as size, color,
              shape, function
            </li>
            <li>recognizes and extends simple patterns</li>
            <li>
              knows how to follow routines in emergency situations and/or seek
              help
            </li>
            <li>
              learns when and how properties can be changed , such as mixing
              colors, and solids to liquids
            </li>
            <li>arranges three pictures to tell a story</li>
            <li>can use the toilet independently</li>
          </ul>
          <strong>Fine Motor Skills</strong>
          <ul>
            <li>
              copies geometric shapes, such as triangles, rhomboids, pentagons,
              hexagons, and octagons
            </li>
            <li>can cut with scissors on a line continuously</li>
            <li>
              demonstrates good control of pencils, crayons, and markers; colors
              within lines well
            </li>
            <li>folds paper diagonally when shown how</li>
            <li>clip papers together</li>
            <li>can button, zip, and tie shoelaces</li>
          </ul>
          <strong>Large Motor Skills</strong>
          <ul>
            <li>can stand on either foot for at least ten seconds</li>
            <li>can jump with both feet, hop, and gallop</li>
            <li>can walk forwards or backwards toe to heel</li>
            <li>can skip with alternating feet</li>
            <li>mastered the low balance beam (wide)</li>
            <li>can throw am object underhand to a target 10 feet away</li>
            <li>can kick, catch, and bounce a ball</li>
            <li>can jump over a low and narrow object</li>
          </ul>
        </TabPane>
        <TabPane tabId="6">
          <p>
            
            <b> Our </b>Pre-K+ program is specifically for older
          pre-K kids.
          
          </p>
          <p>
             - those that are 5 years old before the end of December. It
          is an accelerated version of the Pre-K program where the children will
          sharpen their pre-kindergarten skills. In this class the children will
          generally advance further in their reading, writing, and math. They
          will get added writing practice through journaling and learn about the
          sounds of common letter combinations such as 'sh', 'ch', and 'th'. The
          goals listed below extend those of the Pre-K curriculum.
            </p>
          <ul>
            <li>extended phonics</li>
            <li>how to spell simple phonetic words</li>
            <li>learn more sight words</li>
            <li>read more advanced books</li>
            <li>journal writing</li>
            <li>count by 2s, 5s, and 10s</li>
          </ul>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Curriculumtabs;
