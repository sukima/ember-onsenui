export default function () {
  this.transition(
    this.fromRoute('stack-navigation.index'),
    this.toRoute('stack-navigation.stack1'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('stack-navigation.stack1'),
    this.toRoute('stack-navigation.stack2'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('stack-navigation.stack2'),
    this.toRoute('stack-navigation.stack3'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.hasClass('refresh-hint'),
    this.use('crossFade')
  );

  this.transition(
    this.hasClass('refresh-hash'),
    this.use('wait', 200, {then: 'toUp'})
  );

  this.transition(
    this.hasClass('carousel-animation'),
    this.toValue(function(toValue, fromValue) {
      return toValue.id > fromValue.id;
    }),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
