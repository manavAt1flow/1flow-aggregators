import { Injectable } from '@nestjs/common';

// import cluster from 'cluster'
import * as notReallyCluster from 'cluster';
const cluster = notReallyCluster as unknown as notReallyCluster.Cluster;
import { CpuInfo, cpus } from 'os'

@Injectable()
export class ClusterService {
    static numCPUs = cpus();

    static clusterize(callback: Function): void {
        if (cluster.isPrimary) {
          console.log(`MASTER SERVER (${process.pid}) IS RUNNING `);
    
          for (let i = 0; i < this.numCPUs.length; i++) {
            cluster.fork();
          }
    
          cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
            cluster.fork();
          });
        } else {
          callback();
        }
      }
}
