# Given:
# x = sorted elements
# w = weight of each element in x

# libraries; for calculating median and weighted median
# median
import numpy as np

# weighted median
# install dependency on the shell:
# pip install wquantiles
import wquantiles


# median_calc() is a function to calculate median & weighted median
def median_calc(x, w):
  hasil = {"median": 0, "median_np": 0, "weighted_median":0, "weighted_median_wq":0}
  
  n = len(x)
  print("The number of elements = ", n)
  
  if n == 1:
    hasil['median'] = x[0]
    hasil['weighted_median'] = x[0]
  elif n == 2:
    isi = (x[0]+x[1])/2
    hasil['median'] = isi
    hasil['weighted_median'] = isi
  else:
    # median
    if n % 2 == 0: # n even
      hasil['median'] = (x[int((n/2)-1)] + x[int(((n/2)+1)-1)])/2
    else: # odd
      hasil['median'] = x[int((n/2))+1]
      
    # weighted median
    for i in range(len(w)):
      jml = sum(w[0:i])
      k = i-1
      if jml > 0.5:
        break
    hasil['weighted_median'] = x[k]
    # print("k = ", k)

  hasil['median_np'] = np.median(x)
  hasil['weighted_median_wq'] = wquantiles.median(np.array(x), weights = np.array(w))

  return hasil



#### Data examples #####
print("========== Example: 1 element ==========")
x1 = [1]
w1 = [1]
print("Element(s) = ", x1)
print("Weight(s) = ", x1)
print()
print(median_calc(x1, w1))

print()
print()
print("========== Example: 2 elements ==========")
x2 = [2, 5]
w2 = [0.45, 0.55]
print("Element(s) = ", x2)
print("Weight(s) = ", x2)
print()
print(median_calc(x2, w2))

print()
print()
print("========== Example: elements > 2; even ==========")
x3 = [0, 1, 1, 5, 5, 6, 7, 9, 9, 10, 10, 11, 11, 13, 13, 13, 15, 15, 16, 16, 17, 17, 18, 19, 19, 19, 21, 22, 25, 37]
w3 = [0.0825,	0.0123,	0.0138,	0.0312,	0.0486,
      0.0103,	0.0181,	0.0053,	0.0149,	0.0158,
      0.0226,	0.0266,	0.0334,	0.0142,	0.0359,
      0.0612,	0.0471,	0.0083,	0.1422,	0.0115,
      0.0255,	0.0043,	0.0512,	0.0395,	0.0087,
      0.0193,	0.0881,	0.0877,	0.0085,	0.0114]
print("Element(s) = ", x3)
print("Weight(s) = ", x3)
print()
print(median_calc(x3, w3))

print()
print()
print("========== Example: elements > 2; odd ==========")
x4 = [0, 1, 1, 5, 5, 6, 7, 9, 9, 10, 10, 11, 11, 15, 15, 16, 16, 17, 17, 18, 19, 19, 19, 21, 22, 25, 37]
w4 = [0.0825,	0.0123,	0.0138,	0.0312,	0.0486,
      0.0103,	0.0181,	0.0053,	0.0149,	0.0158,
      0.0226,	0.0266,	0.0334,	0.0142,	0.0359,
      0.0612,	0.0471,	0.0083,	0.1422,	0.0115,
      0.0255,	0.0043,	0.0514,	0.049,	0.09,
      0.029,	0.095]
print("Element(s) = ", x4)
print("Weight(s) = ", x4)
print()
print(median_calc(x4, w4))
