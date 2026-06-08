/**
 * Bioinformatics Suite - Calculation Engine
 * Contains logic for Chargaff's Rule and Hardy-Weinberg Equilibrium
 */

// --- CHARGAFF'S RULE CALCULATOR ---
function calculateChargaff() {
    // 1. Fetch DOM elements
    const baseTypeSelect = document.getElementById("baseType");
    const basePercentInput = document.getElementById("basePercent");
    const resultsDiv = document.getElementById("chargaffResults");

    // 2. Extract and validate input values
    const baseType = baseTypeSelect.value;
    const percent = parseFloat(basePercentInput.value);

    // Chargaff's rule handles double-stranded DNA, so a single base cannot exceed 50%
    if (isNaN(percent) || percent < 0 || percent > 50) {
        alert("Invalid Input: Please enter a base percentage between 0% and 50%.");
        return;
    }

    // 3. Compute the missing base pairs
    let a, t, g, c;

    if (baseType === 'A' || baseType === 'T') {
        a = t = percent;
        g = c = (100 - (2 * percent)) / 2;
    } else {
        g = c = percent;
        a = t = (100 - (2 * percent)) / 2;
    }

    // 4. Trigger UI Reflow (resets CSS animation seamlessly)
    resultsDiv.style.display = "none";
    resultsDiv.offsetHeight; 
    resultsDiv.style.display = "block";

    // 5. Inject calculated data into the DOM
    resultsDiv.innerHTML = `
        <h3>Output Sequence Metrics</h3>
        <ul>
            <li><span>Adenine (A):</span> <strong>${a.toFixed(2)}%</strong></li>
            <li><span>Thymine (T):</span> <strong>${t.toFixed(2)}%</strong></li>
            <li><span>Guanine (G):</span> <strong>${g.toFixed(2)}%</strong></li>
            <li><span>Cytosine (C):</span> <strong>${c.toFixed(2)}%</strong></li>
        </ul>
        <div class="total-indicator">System validation total: ${(a + t + g + c).toFixed(0)}%</div>
    `;
}

// --- HARDY-WEINBERG EQUILIBRIUM CALCULATOR ---
function calculateHW() {
    // 1. Fetch DOM elements
    const alleleTypeSelect = document.getElementById("alleleType");
    const alleleFreqInput = document.getElementById("alleleFreq");
    const resultsDiv = document.getElementById("hwResults");

    // 2. Extract and validate input values
    const alleleType = alleleTypeSelect.value;
    const freq = parseFloat(alleleFreqInput.value);

    // Allele frequencies must strictly sit between 0.0 and 1.0
    if (isNaN(freq) || freq < 0 || freq > 1) {
        alert("Invalid Input: Please enter an allele frequency between 0.0 and 1.0.");
        return;
    }

    // 3. Mathematical execution of HW formulas (p + q = 1) & (p² + 2pq + q² = 1)
    let p, q;

    if (alleleType === 'p') {
        p = freq;
        q = 1 - p;
    } else {
        q = freq;
        p = 1 - q;
    }

    const p2 = Math.pow(p, 2);
    const twoPq = 2 * p * q;
    const q2 = Math.pow(q, 2);

    // 4. Trigger UI Reflow (resets CSS animation seamlessly)
    resultsDiv.style.display = "none";
    resultsDiv.offsetHeight; 
    resultsDiv.style.display = "block";

    // 5. Inject calculated data into the DOM
    resultsDiv.innerHTML = `
        <h3>Population Allelic Distribution</h3>
        <p style="color: var(--text-main); font-weight: 600; margin-bottom: 5px;">Allele Ratios:</p>
        <ul>
            <li><span>Dominant Allele (p):</span> <strong>${p.toFixed(4)}</strong></li>
            <li><span>Recessive Allele (q):</span> <strong>${q.toFixed(4)}</strong></li>
        </ul>
        <p style="color: var(--text-main); font-weight: 600; margin-top: 15px; margin-bottom: 5px;">Genotypic Frequencies:</p>
        <ul>
            <li><span>Homozygous Dominant (p²):</span> <strong>${p2.toFixed(4)} (${(p2 * 100).toFixed(1)}%)</strong></li>
            <li><span>Heterozygous (2pq):</span> <strong>${twoPq.toFixed(4)} (${(twoPq * 100).toFixed(1)}%)</strong></li>
            <li><span>Homozygous Recessive (q²):</span> <strong>${q2.toFixed(4)} (${(q2 * 100).toFixed(1)}%)</strong></li>
        </ul>
    `;
}