## Algorithms

Algorithm is basically a sequence of steps that transform an input into the output

## Big O Notation
When we build algorithm we have to concern about the performance of it, we have to measure the temporal complexity and the spacial complexity in order to success.

But with the temporal complexity we have a problem, when we measure the code execution of an algorithm in terms of time(second, millisecond. etc), is very variant depending the machine, so, it's not the best approach.

So, rather than counting seconds, wich are so variable..., let's count the number of simple operations the computer has to perform. 

![counting operations](/assets/images/algorithms/counting-operations.png)

![alt text](/assets/images/algorithms/counting-operations-2.png)

But, counting is hard, as you see in second image, depending on what we count, the number of operations can be as slow as 2n or as high as 5n + 2, but regardless of the exact number, the number of operations grows roughly proportionally with n.

So BigO Notation is a way to formalize fuzzy counting, it allows us to talk formally about how the runtime of an algorithm grows as the input grow

### Definition
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases.

- f(n) could be linear f(n) = n
- f(n) could be cuadratic f(n) = n2
- f(n) could be constant f(n) = 1
- or could be something different

![Operations](/assets/images/algorithms/operations-1.png)

![Operations](/assets/images/algorithms/operations-2.png)

![alt text](/assets/images/algorithms/operations-3.png)


constanst doesn't matter

![Constants](/assets/images/algorithms/constants.png)
![Smaller terms](/assets/images/algorithms/smaller-terms.png)

### Rules
These won't always apply, but are very helpful

![Shorthand](/assets/images/algorithms/shorthands.png)


### Space complexity

![Space complexity](/assets/images/algorithms/space-complexity.png)

### Logarithms
logarithm is the inverse of exponencial function

![Logarithm](/assets/images/algorithms/logarithm.png)

![Logarithm-2](/assets/images/algorithms/logarithm-2.png)


