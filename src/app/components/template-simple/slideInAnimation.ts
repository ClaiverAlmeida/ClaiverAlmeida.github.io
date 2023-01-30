import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transição entre quaisquer dois estados
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', zIndex: 0 }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' ,opacity: -0}),
          animate('1s ease-out', style({ transform: 'translateY(0%)',opacity: .7 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)',opacity: .3 }),
          animate('1s ease-out', style({ transform: 'translateY(100%)',opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
