# Master slave
Master-Slave architecture is a design pattern used in distributed systems, where one node (the master) controls one or more nodes (the slaves) to perform specific tasks. The master node is responsible for distributing the workload across the slaves and for coordinating their activities. The slave nodes do not have the same level of control as the master node and only perform tasks that are assigned to them by the master.

## Pros
One of the most significant advantages is that it allows for the efficient distribution of workload across multiple nodes. This helps to reduce the load on any one node and ensures that the system can handle large amounts of data and traffic.

Another advantage of using a master-slave architecture is that it provides fault tolerance. If one of the slave nodes fails, the master node can redistribute its workload to the other slave nodes. This ensures that the system can continue to function even if one or more nodes fail.