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
}
