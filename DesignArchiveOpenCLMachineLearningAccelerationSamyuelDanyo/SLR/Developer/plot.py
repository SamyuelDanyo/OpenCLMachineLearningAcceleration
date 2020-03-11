#! /usr/bin/python

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from numpy import array

file_name = 'bin/data.dat'

def get_col (col):
    column = []
    with open(file_name) as f:
      next(f)
      for line in f:
        column.append(float(line.split('\t')[col-1]))
    return column
fig1 = plt.figure()
fig3 = plt.figure()
ax1 = Axes3D(fig1)
ax3 = fig3.add_subplot(2, 1, 1)
for c, m, z in [('r', 'o', 3), ('b', '^', 5)]:
    xs = get_col(1)
    del xs[0]
    ys = get_col(2)
    del ys[0]
    zs = get_col(z)
    del zs[0]
    ax1.scatter(xs, ys, zs, color=c, marker=m)
    ax3.scatter(ys, zs, color=c, marker=m)

ax1.set_xlabel('Input Data Sample')
ax1.set_ylabel('Input Value')
ax1.set_zlabel('Output [Expected in BLUE, Predicted in RED]')
ax1.set_title('Simple Linear Regression Results')
ax1.legend()

ax3.set_xlabel('Input Data Value')
ax3.set_ylabel('Output [Expected in BLUE, Predicted in RED]')
ax3.set_title('Simple Linear Regression Results')

fig2 = plt.figure()
ax2 = Axes3D(fig2)

for c, m, z in [('r', 'o', 6), ('b', '^', 7)]:
    xs = get_col(1)
    del xs[0]
    ys = get_col(2)
    del ys[0]
    zs = get_col(z)
    del zs[0]
    ax2.scatter(xs, ys, zs, color=c, marker=m)

ax2.set_xlabel('Input Data Sample')
ax2.set_ylabel('Input Value')
ax2.set_zlabel('Error Value[Prediction in BLUE, Calculation in RED]')
ax2.set_title('Simple Linear Regression Error Results')
ax2.legend()

#========
#Barchart
#========
#xs = get_col(2)
#ys = get_col(6)
#zs = get_col(7)
#del xs[0]
#del ys[0]
#del zs[0]
#fig3, ax3 = plt.subplots()
#N = len(xs)
#bar_width = 20 / (N * 4)
#xs_shift = [x-bar_width for x in xs]
#rects1 = ax3.bar(xs_shift, ys, bar_width,
#                 color='r',
#                 label='Calculation Error'
#		)
#
#rects1 = ax3.bar(xs, zs, bar_width,
#                 color='b',
#                 label='Prediction Error'
#		)
#
#ax3.set_xlabel('Input Data Values')
#ax3.set_ylabel('Error Value')
#ax3.set_title('Simple Linear Regression Eror Results')
#ax3.legend()
#
#def autolabel(rects):
#    """
#    Attach a text label above each bar displaying its height
#    """
#    for rect in rects:
#        height = rect.get_height()
#        ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
#                '%d' % int(height),
#                ha='center', va='bottom')
#
#autolabel(rects1)
#autolabel(rects2)
# Plot data.
plt.show()
