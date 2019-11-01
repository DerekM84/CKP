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
            Classrooms
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Enrichment
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            2's
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            3's
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
          <strong>Our</strong> classrooms are cheerful, light filled, and very
          spacious, having twice the floor area per student compared with most
          preschools and day-cares, and we keep&nbsp;our class sizes
          deliberately small. In our 2s classroom we have at most 8 children,
          and no more than 12 children in our other classrooms. Each of our
          classrooms has an attached bathroom, and all have areas dedicated to
          different activities including reading corners, table activities,
          circle time, sensory tables &amp; bins, dramatic play, and gross motor
          activities. The entrance to Curious Kids Preschool has been placed at
          the side of the building ensuring a safe area for children and
          parents, with parking provided both at the front and rear of the
          school. For security, entrance into reception is controlled by a
          keypad.
          <h1 className="classroom-name">2's Classroom</h1>
          <div className="classroom-image-container">
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/2A.jpg"
              alt="classroom-preview-image"
            />
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/2B.jpg"
              alt="classroom-preview-image"
            />
          </div>
          <h1 className="classroom-name">3's Classroom</h1>
          <div className="classroom-image-container">
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/3A.jpg"
              alt="classroom-preview-image"
            />
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/3B.jpg"
              alt="classroom-preview-image"
            />
          </div>
          <h1 className="classroom-name">Pre-K Classroom</h1>
          <div className="classroom-image-container">
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/PreK1.jpg"
              alt="classroom-preview-image"
            />
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/PreK2.jpg"
              alt="classroom-preview-image"
            />
          </div>
          <h1 className="classroom-name">Pre-K+ Classroom</h1>
          <div className="classroom-image-container">
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/Kplus1.jpg"
              alt="classroom-preview-image"
            />
            <img
              className="classroom-preview-image"
              src="/images/Classrooms/Kplus2.jpg"
              alt="classroom-preview-image"
            />
          </div>
        </TabPane>

        <TabPane tabId="2">
          <h1>Areas of Enrichment</h1>
          <div>
            <strong>At&nbsp;</strong>Curious Kids we believe in providing a
            broad experience to our students and so include enrichment classes
            alongside our regular&nbsp;
            <a href="http://curiouskidspreschool.com/curriculum/">curriculum</a>
            &nbsp;- we do not charge extra for these activities.
          </div>
          <div>Our enrichment classes include:</div>
          <ul>
            <li>
              <a href="http://curiouskidspreschool.com/enrichment/art-masterpiece-program/">
                Art Masterpiece Program
              </a>
              , each student completes their own art masterpiece, which is
              displayed in our gallery
            </li>
            <li>
              <a href="http://curiouskidspreschool.com/enrichment/science/">
                Science
              </a>
              , a hands-on weekly experiment is given in each classroom
            </li>
            <li>
              <a href="http://curiouskidspreschool.com/enrichment/yoga/">
                Yoga
              </a>
              , done once per week in each classroom taught by a certified kids
              yoga instructor
            </li>
            <li>
              Character&nbsp;Education, each teacher incorporates a character
              word of the week into their lessons
            </li>
          </ul>

          <h1>Art Masterpiece</h1>

          <strong>At</strong>&nbsp;Curious Kids we promote free art expression.
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

          <h1>Science</h1>

          <strong>At&nbsp;</strong>Curious Kids we believe that science is so
          important that each class conducts a hands-on experiment every week.
          Engaging children in science makes them question the world about them
          and encourages them to use their curiosity to discover new sights,
          sounds, smells and textures. Our kids actively participate in science
          lessons so they learn to observe, measure, pour, mix and stir. They
          are encouraged to look, touch, and smell at all stages. Our older kids
          are introduced to the scientific method of making predictions before
          conducting an experiment, recording data, and analyzing results. We
          give our curious kids lasting memories through fun experiments
          designed to foster a love for science.
          <h1>Yoga</h1>

          <strong>Children's&nbsp;</strong>yoga is a fun way for kids to develop
          important skills in a supportive environment. The nurturing
          environment we provide in our yoga&nbsp;lesson by our certified
          children's yoga teacher&nbsp;encourages the kids to relax, have fun
          while they develop not only strength, co-ordination, flexibility and
          balance, but also body awareness, better focus and concentration. Each
          class has a yoga lesson once a week.
          <strong>We&nbsp;</strong>balance structure and spontaneity so the kids
          learn to listen to each other as well as to express creativity. We
          know that kids learn best when they are having fun, so we interweave
          story, song, games and poses, which makes it much more active - and
          fun - than adult's yoga classes!
          <strong>A</strong>&nbsp;central tenant of yoga is respect and honor
          for ourselves, for each other, and for our environment. In our yoga
          classes the children often go on magical journeys around the world,
          learning about the different animals and cultures in the process.
          <h1>Gross Motor Skills</h1>
          <p>At
          Curious Kids we believe in exercising bodies as well as minds. As part of the Arizona Department of Health Services&nbsp; <a target="_blank" href="http://azdhs.gov/empower-program/">
            Empower Program</a>&nbsp;we have teacher led physical activity in each of our classrooms every day. Not only does this help develop physical co-ordination but we encourage co-operation&nbsp;and team-work through group activities, and even include learning elements such as combining exercise with mathematics - mathercise!</p>
<p >Most of all, we want the kids to have fun and so we set up obstacle courses, laser mazes (using yarn for 'laser beams'), play musical chairs, and during sports week we even have the kids kick football goals, shoot basketball hoops and have indoor T-ball. Our spacious classrooms have balance beams, tumbling mats, tunnels, hoops and other exercise equipment.</p>

        </TabPane>

        <TabPane tabId="3">
          <strong>Our&nbsp;</strong>2 year-old program centers upon developing
          language skills, group awareness, listening, and fine/gross motor
          skills. In the course of the year each kid will learn the basic
          shapes, colors, be introduced to letters and letter sounds, numbers
          zero to ten, and counting objects. At the start of the year the kids
          work on recognizing their written first name, and by the end of the
          year they will be learning how to spell it. We work on developing fine
          motor skills used in cutting, gluing, and painting. We also work on
          holding crayons/marker pens in the correct tripod grip, coloring
          within outlines, and learning to trace lines. Activities include,
          circle time, calendar, listening to stories, looking at books, singing
          and dancing, exploring, and imaginative play using age appropriate
          toys such as blocks, wheeled toys, shape puzzles, dolls, and
          manipulatives to foster creativity. Our 2s class includes enrichment
          classes in Spanish, science, art masterpiece, yoga, and character
          education. As we accept children into the 2s class who are not toilet
          trained, and work with parents on potty training their child
          throughout the year. The curriculum goals are listed below by
          category.
          <strong>Language &amp; Communication</strong>
          <ul>
            <li>use 4 or 5 word sentences</li>
            <li>use age-appropriate speech patterns</li>
            <li>say their name, age and gender</li>
            <li>name familiar objects</li>
            <li>
              name the eight basic colors: red, orange, yellow, green, blue,
              purple, black, and brown
            </li>
            <li>
              name the four basic shapes: circle, square, rectangle, triangle
            </li>
            <li>identify happenings in pictures</li>
          </ul>
          <strong>Reading &amp; Writing</strong>
          <ul>
            <li>sing the ABC song</li>
            <li>recognize their written first name</li>
            <li>recognize some letters of the alphabet</li>
            <li>know some letter sounds</li>
          </ul>
          <strong>Numbers &amp; Counting</strong>
          <ul>
            <li>count to 10 by rote</li>
            <li>count up to 10 objects</li>
            <li>show understanding of the meaning of one, two and three</li>
            <li>recognize some of the numerals</li>
          </ul>
          <strong>Social &amp; Emotional</strong>
          <ul>
            <li>play cooperatively with other children for a time</li>
            <li>take turns with help from the teacher</li>
            <li>
              participate in group activities such as singing, dancing, stories
            </li>
            <li>speak to the teacher and classmates</li>
            <li>exhibit good manners</li>
            <li>put away classroom toys and snack time dishes</li>
            <li>
              begin to control their emotions and use words to express needs
            </li>
          </ul>
          <strong>Cognitive</strong>
          <ul>
            <li>build a tower of more than six blocks</li>
            <li>stack rings on a peg in order of size</li>
            <li>do puzzles of up to eight pieces</li>
            <li>group objects by a single category</li>
            <li>match a picture to an object</li>
            <li>
              identify body parts: eyes, nose, mouth, ears, hair, cheeks, chin,
              arms, legs, feet, hands, fingers, toes, elbows, knees
            </li>
            <li>look at books for pleasure</li>
            <li>
              show understanding of simple concepts such as “all” and “none”
            </li>
          </ul>
          <strong>Fine Motor Skills</strong>
          <ul>
            <li>hold a pencil or crayon with two fingers and thumb</li>
            <li>draw circles, lines, and crosses</li>
            <li>paint or color dots and lines</li>
            <li>use scissors with assistance</li>
            <li>use a glue stick</li>
            <li>string large beads</li>
            <li>wash and dry hands</li>
          </ul>
          <strong>Large Motor Skills</strong>
          <ul>
            <li>run easily</li>
            <li>jump up and down</li>
            <li>climb simple structures</li>
            <li>balance on one foot for a few seconds</li>
            <li>walk backwards and on tiptoes</li>
            <li>kick a ball forward</li>
            <li>throw a ball overhand</li>
            <li>use feet to propel a riding toy</li>
          </ul>
        </TabPane>

        <TabPane tabId="4">
          <strong>In&nbsp;</strong>the course of their third year children's
          language grows at an enormous rate and they become far more
          independent. Our curriculum is designed to encourage these emergent
          language and social skills. For example, story time is used to teach
          new words, concepts, and print awareness, and the kids are schooled in
          waiting their turn, learning how to cope with minor conflicts, and
          working in groups - such as making floor puzzles together.
          Academically, the focus is on developing their pre-reading and
          pre-writing skills to pave the way for their pre-k year. We continue
          to develop the relationship between letters and letter sounds
          (phonics) started in the 2s class, and learn about rhyming and initial
          word sounds (phonemic awareness). The kids will learn that stories
          come from the written text of books, which consists of words read from
          left to right and top to bottom, and that words are made up of letters
          (print awareness). The fine motor skills needed for writing are worked
          on directly through line, shape and letter tracing, as well as
          indirectly through cutting, painting, drawing and gluing. By the end
          of the year the kids will recognize most of the upper and lower case
          letters, know most letter sounds, how to spell their first and last
          names, and to write their first name. Numeracy and patterning are also
          worked on; by the end of the year the goal is to count up to twenty,
          show an understanding of adding and subtracting objects, predicting
          what follows in simple patterns, and sorting objects by multiple
          categories (e.g. give me all the red teddy bears). They will also be
          able to recognize written numbers up to 10 and understand the
          correspondence between numbers and objects. We do not forget to have
          fun in the classroom, and there is plenty of time for self-expression
          through art, dramatic play, and gross motor activity such as freeze
          dance, obstacle courses, and yoga. Every week, a science experiment
          encourages the kids to get involved in new sensory experiences. The
          curriculum goals are listed below by category.
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
          <strong>We&nbsp;</strong>have an ambitious pre-k program that prepares
          the kids for kindergarten both socially and academically. Through
          having a 5-day program the kids will be reading and writing
          confidentally by the end of the year. In having no more than 12 kids
          per class the children get the individual attention they need to
          progress academically, but we also get our two pre-k classes together
          for fun activities where they learn to be in the larger social groups
          that they will experience in Kindergarten. Our curriculum covers and
          exceeds both the&nbsp;Kindergarten Individual Screening/Skills Test (
          <a href="https://www.cusd80.com/cms/lib/AZ01001175/Centricity/Domain/24/2017-2018%20CUSD%20Elementary%20Handbook.pdf">
            KIST
          </a>
          )&nbsp;assessment taken by every child before entry to kindergarten in
          the Chandler Unified School District (CUSD), and&nbsp;the&nbsp;
          <a href="https://dibels.uoregon.edu/docs/dibelsparentguide.pdf">
            DIBELS
          </a>
          &nbsp;assessments used by CUSD during the Kindergarten and elementary
          years. We have developed an integrated reading and writing program,
          founded upon current research guidance and best practices, that
          provides the kids with the tools and confidence to progress rapidly.
          For example, prior to teaching reading the kids will lean how to split
          words up into their constituent sounds (phoneme segmentation), and to
          blend letter sounds together to form words.&nbsp;Learning through fun
          is also part of our approach - the kids love playing hangman using
          words or sentences taken from their reading books. We teach&nbsp;
          <a href="http://www.zaner-bloser.com/zaner-bloser-handwriting">
            Zaner-Bloser
          </a>
          &nbsp;(ball&nbsp;and stick) handwriting, the same as taught by CUSD
          schools. Kids learn more than counting and simple arithmetic,
          including learning about money, telling the time, tallying, graphing,
          and measuring - for example, the kids get to determine how big their
          classrooms are by laying themselves out end-to-end. We introduce kids
          to techniques they will learn about in Kindergarten,
          such&nbsp;as&nbsp;
          <a href="http://mathcoachscorner.blogspot.com/2013/07/teaching-number-bonds.html">
            number bonds
          </a>
          &nbsp;(how many different ways to make a number), part of the common
          core standards.&nbsp;Not only do the kids conduct a hands-on science
          experiment every week, in our pre-k classes they will learn about the
          steps scientists take to advance hypotheses - and that failure is part
          of the process! Having fun is an important part of our school, and for
          gross motor skills you will see the kids having team races and
          obstacle courses - such as laser mazes built with red yarn done to the{" "}
          <a href="https://www.youtube.com/watch?v=JtyByefOvgQ">
            Mission Impossible theme music
          </a>{" "}
          - even kicking football goals in sports week, and a weekly yoga
          lesson. The curriculum goals are listed below by category.
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
          <strong>Our&nbsp;</strong>Pre-K+ program is specifically for older
          pre-K kids - those that are 5 years old before the end of December. It
          is an accelerated version of the Pre-K program where the children will
          sharpen their pre-kindergarten skills. In this class the children will
          generally advance further in their reading, writing, and math. They
          will get added writing practice through journaling and learn about the
          sounds of common letter combinations such as 'sh', 'ch', and 'th'. The
          goals listed below extend those of the&nbsp;
          <a href="http://curiouskidspreschool.com/curriculum/pre-k/">Pre-K</a>
          &nbsp;curriculum.
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
