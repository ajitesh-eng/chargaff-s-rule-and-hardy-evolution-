# chargaff-s-rule-and-hardy-evolution-
this repo i have made so that i can use my webpage hassel-free anywhere to calculate Chargaff's Rule and Hardy-Weinberg equlibrium principle 
```markdown
# Bioinformatics Suite: Genetics & Evolution Calculators

A responsive, high-performance web application designed for students, researchers, and bioinformaticians. This suite provides two standalone micro-utilities to compute DNA base distribution according to **Chargaff's Rules** and to simulate genetic variation under the **Hardy-Weinberg Principle**.

The tool features a modern, sleek "glassmorphic" interface resembling terminal readouts and laboratory microarrays, styled purely with native HTML5, CSS3 variables, and vanilla JavaScript.

---

## 🚀 Features

### 1. Chargaff's Rule Analyzer (Genetics Segment)
* **Mathematical Deduction**: Computes the percentages of all four nitrogenous bases—Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)—given the concentration of just one.
* **Constraints Verification**: Limits entry parameters to a maximum of 50% for any single base, adhering strictly to double-stranded DNA constraints ($A+T \le 100\%$, $G+C \le 100\%$).
* **Real-time Validation**: Displays an automated check ensuring total sequence composition sums precisely to 100%.

### 2. Hardy-Weinberg Equilibrium Simulator (Evolution Section)
* **Allelic Distribution**: Deduces both dominant ($p$) and recessive ($q$) allele frequencies given a single known component.
* **Genotypic Frequency Breakdown**: Instantly calculates expected population ratios for:
  * Homozygous Dominant ($p^2$)
  * Heterozygous ($2pq$)
  * Homozygous Recessive ($q^2$)
* **Percentage Translation**: Outputs values in decimals and population percentages.

### 3. Smooth & Modern User Experience
* **Bioinformatics Palette**: Dark slate backdrop complemented by glowing slate-blue lines and bio-green elements.
* **Responsive Layout**: Adapts smoothly to mobile screens, laptops, and wide monitors.
* **Dynamic Reflow Engine**: Custom JavaScript triggers CSS reset animations seamlessly on consecutive computations.

---

## 📂 File Architecture

The suite can either be deployed as an all-in-one standalone HTML document or split into distinct layers:

```bash
├── bio_calculators.html   # Main UI Structure & Embedded Theme
└── script.js              # Calculation Logic Engine (Optional External Script)
