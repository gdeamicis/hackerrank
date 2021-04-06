# Dinamyc Arrays

Create a 2-dimensional array, *arr*, of *n* empty arrays. All arrays are zero indexed.

Create an integer, *lastAnswer*, and initialize it to *0*.

There are *2* types of queries:
1. Query: 1 x y
  1. Find the list within *arr* at index *idx = ((x ⊕ lastAnswer)% n)*.
  2. Append the integer *y* to the *arr[idx]*.

2. Query: 2 x y
  1. Find the list within *arr* at index *idx = ((x ⊕ lastAnswer)% n)*.
  2. Find the value of element *y % size(arr[idx])* where *size* is the number of elements in *arr[idx]*. Assign the value to *lastAnswer*.
  3. Print the new value of *lastAnswer* on a new line

**Note:** ⊕ is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on [Wikipedia](https://en.wikipedia.org/wiki/Exclusive_or). % is the modulo operator.

## Function Description

Complete the dynamicArray function below.

*dynamicArray* has the following parameters:
- *int n*: the number of empty arrays to initialize in *arr*
- *string queries[q]*: an array of query strings

### Returns

*int[]*: the results of each type 2 query in the order they are presented

### Input Format

The first line contains two space-separated integers, *n*, the size of *arr* to create, and *q*, the number of queries, respectively.
Each of the  subsequent lines contains a query in the format defined above, *queries[i]*.

### Constraints

* 1 <= n,q <= 10^5
* 0 <= x <= 10^9
* 0 <= y <= 10^9

* It is guaranteed that query type *2* will never query an empty array or index.

### Sample Input

2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1

### Sample Output

7
3

### Explanation

1. Initial Values:
* *n = 2*
* *lastAnswer = 0*
* *arr[0] = []*
* *arr[1] = []*

2. Query 0: Append 5 to *arr[((0 ⊕ 0) % 2)] = arr[0]*.
* *lastAnswer = 0*
* *arr[0] = [5]*
* *arr[1] = []*

3. Query 1: Append 7 to *arr[((1 ⊕ 0) % 2)] = arr[1]*.
* *arr[0] = [5]*
* *arr[1] = [7]*

4. Query 2: Append 3 to *arr[((0 ⊕ 0) % 2)] = arr[0]*.
* *lastAnswer = 0*
* *arr[0] = [5, 3]*
* *arr[1] = [7]*

5. Query 3: Assign the value at index 0 of *arr[((1 ⊕ 0) % 2)] = arr[1]* to *lastAnswer*, print *lastAnswer*.
* *lastAnswer = 7*
* *arr[0] = [5, 3]*
* *arr[1] = [7]*

> 7

6. Query 4: Assign the value at index 1 of *arr[((1 ⊕ 7) % 2)] = arr[0]* to *lastAnswer*, print *lastAnswer*.
* *lastAnswer = 3*
* *arr[0] = [5, 3]*
* *arr[1] = [7]*

> 3