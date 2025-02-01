#include <iostream>
#include <conio.h>
#include <time.h>
#include <windows.h>
using namespace std;

void insertsort(int arr[], int n) {
    int i, j, key;
    for (j = 1; j < n; j++) {
        key = arr[j];
        i = j - 1;
        // Sleep(100); // Uncomment to slow down the sorting for visualization (100 ms)
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }
}

int main() {
    int arr[300000], choice, n;
    double time; // Change to double for better precision
    clock_t start, ending;
    char ch = 'y';

    while (ch == 'y') {
        cout << "\nAvneet Kaur 06813202722 CSE-2\n";
        cout << "Enter your choice\n1. Best Case\n2. Average Case\n3. Worst Case\n";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "\nBest Case\n";
                cout << "Enter size of array\n";
                cin >> n;
                for (int i = 0; i < n; i++)
                    arr[i] = i; // Best case: already sorted array
                start = clock();
                insertsort(arr, n);
                ending = clock();
                time = static_cast<double>(ending - start) / CLOCKS_PER_SEC;
                cout << "Time for best case: " << time << " seconds" << endl;
                break;

            case 2:
                cout << "\nAverage Case\n";
                cout << "Enter size of array\n";
                cin >> n;
                for (int i = 0; i < n; i++)
                    arr[i] = rand() % n; // Random values for average case
                start = clock();
                insertsort(arr, n);
                ending = clock();
                time = static_cast<double>(ending - start) / CLOCKS_PER_SEC;
                cout << "Time for average case: " << time << " seconds" << endl;
                break;

            case 3:
                cout << "\nWorst Case\n";
                cout << "Enter size of array\n";
                cin >> n;
                for (int i = 0; i < n; i++)
                    arr[i] = n - i - 1; // Worst case: reverse sorted array
                start = clock();
                insertsort(arr, n);
                ending = clock();
                time = static_cast<double>(ending - start) / CLOCKS_PER_SEC;
                cout << "Time for worst case: " << time << " seconds" << endl;
                break;

            default:
                cout << "Invalid choice, please select 1, 2, or 3.\n";
                break;
        }
        
        cout << "Want to enter again? (y/n) ";
        cin >> ch;
    }

    return 0;
}
