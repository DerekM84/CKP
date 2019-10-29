import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "./images/art-gallery.jpg",
    key: '1'
  },
  {
    src: './images/group-activity.jpg',
    key: '2'
  },
  {
    src: "./images/school-front.jpg",
    key: '3'
  }
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;
