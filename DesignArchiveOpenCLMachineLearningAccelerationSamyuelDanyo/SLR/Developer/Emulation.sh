#!/usr/bin/env bash

`chmod +x bin/host`
`chmod +x host/plot.py`

N_ELEMENTS=100000
ITERATIONS=1
PLOT=0
POSITIONAL=()
START=-80
END=80
F_NAME="data.dat"

while [[ $# -gt 0 ]]
do
current_argument="$1"
	case $current_argument in
		-n)
		N_ELEMENTS=$2
		shift
		shift
		;;
		-i)
		ITERATIONS=$2
		shift
		shift
		;;
		-s|--start)
		START=$2
		shift
		shift
		;;
		-e|'--end')
		END=$2
		shift
		shift
		;;
		-f|--f_name)
		F_NANME=$2
		shift
		shift
		;;
		-p|--plot)
		PLOT=1
		shift
		;;
		-h|--help)
			 echo "Bash Wrapper Script for running Simple Linear Regression OpenCL implementation"
			 echo "Usage: ./Emulator.sh -n N -i I -s S -e E -plot"
			 echo "Where: '-n' is the number of array elements"
			 echo "Where: '-i' is the number of iterations, the program will run"
			 echo "'-s''-e' are start & end of data interval, '-plot' activates plotting of data."
			 exit 1
		;;
		*)
		POSITIONAL+=("$1")
		shift
		;;
esac
done


if [ $END -le $START ]; then
	echo"Start of the data interval needs to be before the end"
fi

set -- "${POSITIONAL[@]}" # restore positional parameters


CL_CONTEXT_EMULATOR_DEVICE_ALTERA=1 ./bin/host_e -n=$N_ELEMENTS -i=$ITERATIONS -s=$START -e=$END
if [ "$PLOT" -eq "1" ]; then
	./host/plot.py 2> /dev/null
fi
