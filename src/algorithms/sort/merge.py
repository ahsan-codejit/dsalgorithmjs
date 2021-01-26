
def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]
        print(L)
        print(R)
        mergeSort(L)
        mergeSort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1

            k += 1

        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

        return arr


def printList(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print("\n")


arr = [12, 11, 13, 5, 6, 7]
print("Given array is", end="\n")
printList(arr)
mergeSort(arr)
print("\nSorted array is: ", end="\n")
printList(arr)
