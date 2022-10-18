print("==============================")
print("Estimates of Location Python Codes Exercise")
print("==============================")
print()

# Given data as below
x = [10, 5, 21, 1, 17, 16, 19, 13, 18, 15, 19, 22, 37, 11, 13, 11, 5, 17, 19, 9, 0, 16, 1, 15, 6, 10, 13, 7, 25, 9]
print("===== Given data =====")
print("x =", x)
print()

# the number of elements in x
n = len(x)
print("===== The number of elements in x")
print("n =", n)
print()
print()

### === Arithmetic Mean ===
print("==============================")
print("ARITHMETIC MEAN")
print("==============================")
# the sum of all elements in x
jumlah = sum(x)

# arithmetic mean
# 1) manual calculation
manual_mean = jumlah/n

# 2) python calculation
import numpy as np
nump_mean = np.mean(x)

# check the results

print("=== Arithmetic mean from")
print("manual calculation is", manual_mean)
print("calculation using Numpy is", nump_mean)
print()
print()

### === Trimmed Mean ===
print("==============================")
print("TRIMMED MEAN")
print("==============================")
print()
# ordered data
ordered_x = sorted(x)

# the number of ommited values
print("=== Fraction to cut off of both tails of the distribution p = 10%.")
p = 10/100
print("p =", p)

# the number of elements left for calculation
id_ommit = int(np.floor(p*n))
sisa_ord_x = ordered_x[id_ommit:(n-id_ommit)]
print("=== The number of elements left for calculation =", len(sisa_ord_x))
print()

# trimmed mean
# 1) manual calculation
manual_tm = sum(sisa_ord_x) / (n - 2*p)

# 2) python calculation
from scipy import stats
scipy_tm = stats.trim_mean(ordered_x, 0.1)

# check the results
print("=== Trimmed mean from")
print("manual calculation is", manual_tm)
print("calculation using Scipy is", scipy_tm)
print()

### === Weighted Mean ===
print("==============================")
print("WEIGHTED MEAN")
print("==============================")
print()
w = [0.0825,	0.0123,	0.0138,	0.0312,	0.0486,
          0.0103,	0.0181,	0.0053,	0.0149,	0.0158,
          0.0226,	0.0266,	0.0334,	0.0142,	0.0359,
          0.0612,	0.0471,	0.0083,	0.1422,	0.0115,
          0.0255,	0.0043,	0.0512,	0.0395,	0.0087,
          0.0193,	0.0881,	0.0877,	0.0085,	0.0114]
print("=== Weight of each corrensponding element in x")
print("W =", w)
print()

# weighted mean
# 1) manual calculation
jml1 = 0
jml2 = 0
for i in range(len(x)):
  jml1 += x[i]*w[i] # sum of value * weight
  
manual_wm = jml1 / sum(w)

# 2) python calculation
numpy_wm = np.average(x, weights=w)

# check the results
print("=== Weighted mean from")
print("manual calculation is", manual_wm)
print("calculation using Numpy is", numpy_wm)
print()
