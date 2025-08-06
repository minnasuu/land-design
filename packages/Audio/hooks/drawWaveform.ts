export function drawWaveform(buffer: AudioBuffer, samples: number): number[] {
  console.log('drawWaveform', buffer);

  const rawData = buffer.getChannelData(0); // We use only the first channel
  const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
  let filteredData: number[] = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    const value = sum / blockSize;
    if (!Number.isNaN(value)) {
      filteredData.push(value);
    }
  }
  return filteredData;
}